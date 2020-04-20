import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { switchMap, map, catchError, filter, mergeMap } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import MaterialSelectorActions from '../actions/material-selector';
import MaterialSelectorService, {
  IMaterialCategoriesResponse,
} from '../../services/MaterialSelectorService';
import { IMaterialProduct } from '../../models/MaterialSelector';

export const getCategoriesEpic: Epic<
  MaterialSelectorActions.MaterialSelectorActions,
  MaterialSelectorActions.MaterialSelectorActions,
  // Should be IRootState but typescript complaining..
  any
> = (action$, state$) =>
  action$.pipe(
    filter(
      isOfType(
        MaterialSelectorActions.MaterialSelectorActionTypes.GetCategories
      )
    ),
    switchMap((action: MaterialSelectorActions.IGetCategoriesAction) =>
      MaterialSelectorService.getCategories(action.payload).pipe(
        map((res: IMaterialCategoriesResponse) => {
          return MaterialSelectorActions.loadCategories(res);
        }),
        catchError((err) => {
          console.log('err', err);
          return of(MaterialSelectorActions.resetIsLoading());
        })
      )
    )
  );

export const getProductsEpic: Epic<
  MaterialSelectorActions.MaterialSelectorActions,
  MaterialSelectorActions.MaterialSelectorActions,
  // Should be IRootState but typescript complaining..
  any
> = (action$, state$) =>
  action$.pipe(
    filter(
      isOfType(MaterialSelectorActions.MaterialSelectorActionTypes.GetProducts)
    ),
    switchMap((action: MaterialSelectorActions.IGetProductsAction) =>
      MaterialSelectorService.getProducts(action.payload.category).pipe(
        mergeMap((res: IMaterialProduct[]) => {
          return of(
            MaterialSelectorActions.loadProducts(action.payload.category, res)
          );
        }),
        catchError((err) => {
          console.log('err', err);
          return of(
            MaterialSelectorActions.loadProducts(action.payload.category, [])
          );
        })
      )
    )
  );
