export enum AppActionTypes {
  AppInit = 'App Init',
  AppLoad = 'App Loaded',
}

export interface IAppInitAction {
  type: AppActionTypes.AppInit;
}

export interface IAppLoadAction {
  type: AppActionTypes.AppLoad;
}

export function appInit(): IAppInitAction {
  return {
    type: AppActionTypes.AppInit,
  };
}

export function appLoad(): IAppLoadAction {
  return {
    type: AppActionTypes.AppLoad,
  };
}

export type AppActions = IAppInitAction | IAppLoadAction;
