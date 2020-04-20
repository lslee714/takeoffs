import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { AjaxResponse } from 'rxjs/ajax';
import {
  switchMap,
  map,
  catchError,
  filter,
  ignoreElements,
} from 'rxjs/operators';
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
          return ConstructionProjectActions.loadProjects(res);
        }),
        catchError((err) => {
          console.log('err', err);
          return of(ConstructionProjectActions.resetIsLoading());
        })
      )
    )
  );

export const postProjectEpic: Epic<
  ConstructionProjectActions.ProjectActions,
  ConstructionProjectActions.ProjectActions,
  // Should be IRootState but typescript complaining..
  any
> = (action$, state$) =>
  action$.pipe(
    filter(
      isOfType(ConstructionProjectActions.ProjectActionTypes.CreateProject)
    ),
    switchMap((action: ConstructionProjectActions.ICreateProjectAction) =>
      ConstructionProjectsService.postProject(action.payload.project).pipe(
        map((res: AjaxResponse) => {
          const project = res.response;
          return ConstructionProjectActions.loadProjects([project]);
        }),
        catchError((err) => {
          console.log('err', err);
          return of(ConstructionProjectActions.resetIsLoading());
        })
      )
    )
  );

export const deleteProjectEpic: Epic<
  ConstructionProjectActions.ProjectActions,
  ConstructionProjectActions.ProjectActions,
  // Should be IRootState but typescript complaining..
  any
> = (action$, state$) =>
  action$.pipe(
    filter(
      isOfType(ConstructionProjectActions.ProjectActionTypes.DeleteProject)
    ),
    switchMap((action: ConstructionProjectActions.IDeleteProjectAction) =>
      ConstructionProjectsService.deleteProject(action.payload.link).pipe(
        ignoreElements(),
        catchError((err) => {
          console.log('err', err);
          return of(ConstructionProjectActions.resetIsLoading());
        })
      )
    )
  );

export const saveProjectEpic: Epic<
  ConstructionProjectActions.ProjectActions,
  ConstructionProjectActions.ProjectActions,
  // Should be IRootState but typescript complaining..
  any
> = (action$, state$) =>
  action$.pipe(
    filter(
      isOfType(ConstructionProjectActions.ProjectActionTypes.SaveProjectCart)
    ),
    switchMap((action: ConstructionProjectActions.ISaveProjectCartAction) =>
      ConstructionProjectsService.saveProjectCart(
        action.payload.saveCartLink,
        action.payload.cart
      ).pipe(
        ignoreElements(),
        catchError((err) => {
          console.log('err', err);
          return of(ConstructionProjectActions.resetIsLoading());
        })
      )
    )
  );
