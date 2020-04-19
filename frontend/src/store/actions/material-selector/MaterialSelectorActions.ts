export enum MaterialSelectorActionTypes {
  GetDivisions = 'Get Divisions',
  LoadDivisions = 'Load Divisions',
  ResetIsLoading = 'Is Loading',
}

export interface IGetDivisionsAction {
  type: MaterialSelectorActionTypes.GetDivisions;
}

export interface ILoadDivisionsAction {
  type: MaterialSelectorActionTypes.LoadDivisions;
  //TODO type
  payload: { divisions: any };
}

export interface IResetIsLoadingAction {
  type: MaterialSelectorActionTypes.ResetIsLoading;
}

export function getDivisions(): IGetDivisionsAction {
  return {
    type: MaterialSelectorActionTypes.GetDivisions,
  };
}

export function loadDivisions(
  //TODO type
  divisions: any
): ILoadDivisionsAction {
  return {
    type: MaterialSelectorActionTypes.LoadDivisions,
    payload: { divisions },
  };
}

export function resetIsLoading(): IResetIsLoadingAction {
  return {
    type: MaterialSelectorActionTypes.ResetIsLoading,
  };
}

export type MaterialSelectorActions =
  | IGetDivisionsAction
  | ILoadDivisionsAction
  | IResetIsLoadingAction;
