import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { switchMap, map, catchError, filter } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import ConstructionProjectActions from '../actions/construction-projects';
import { IConstructionProject } from '../../models/ConstructionProject';
import ConstructionProjectsService from '../../services/ConstructionProjectsService';

export const getProjectsEpic: Epic<
  ConstructionProjectActions.ProjectActions,
  ConstructionProjectActions.ProjectActions,
  // Should be IRootState but typescript complaining..
  any
> = (action$, state$) =>
  action$.pipe(
    filter(isOfType(ConstructionProjectActions.ProjectActionTypes.GetProjects)),
    switchMap((action: ConstructionProjectActions.IGetProjectsAction) =>
      ConstructionProjectsService.getProjects().pipe(
        map((res: IConstructionProject[]) => {
          console.log('RESPONSE', res);
          return ConstructionProjectActions.loadProjects(res);
        }),
        catchError((err) => {
          console.log('err', err);
          return of(ConstructionProjectActions.resetIsLoading());
        })
      )
    )
  );
