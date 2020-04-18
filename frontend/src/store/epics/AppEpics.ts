import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { switchMap, map, catchError, filter } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import AppActions from '../actions/app';

export const appInitEpic: Epic<
  AppActions.AppActions,
  AppActions.AppActions,
  //Should be IRootState but typescript complaining..
  any
> = (action$, state$) =>
  action$.pipe(
    filter(isOfType(AppActions.AppActionTypes.AppInit)),
    switchMap((action: AppActions.IAppInitAction) =>
      ajax.getJSON('http://localhost:8000').pipe(
        map((res) => {
          console.log('RESPONSE', res);
          return AppActions.appLoad();
        }),
        catchError((err) => {
          console.log('err', err);
          return of(AppActions.appLoad());
        })
      )
    )
  );
