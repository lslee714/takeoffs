import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { switchMap, map, catchError, filter } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import MaterialSelectorActions from '../actions/material-selector';
import { IMaterialGroup } from '../../models/MaterialSelector';
import MaterialSelectorService from '../../services/MaterialSelectorService';

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
      MaterialSelectorService.getCategories().pipe(
        map((res: IMaterialGroup[]) => {
          console.log('RES!!');
          return MaterialSelectorActions.loadCategories(res);
        }),
        catchError((err) => {
          console.log('err', err);
          return of(MaterialSelectorActions.resetIsLoading());
        })
      )
    )
  );
