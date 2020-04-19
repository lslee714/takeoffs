import { IMaterialCategoriesResponse } from '../../../services/MaterialSelectorService';

export enum MaterialSelectorActionTypes {
  GetCategories = 'Get Categories',
  LoadCategories = 'Load Categories',
  ResetIsLoading = 'Is Loading',
}

export interface IGetCategoriesAction {
  type: MaterialSelectorActionTypes.GetCategories;
  payload?: { perPage: number; page: number };
}

export interface ILoadCategoriesAction {
  type: MaterialSelectorActionTypes.LoadCategories;
  payload: IMaterialCategoriesResponse;
}

export interface IResetIsLoadingAction {
  type: MaterialSelectorActionTypes.ResetIsLoading;
}

export function getCategories(payload?: {
  page: number;
  perPage: number;
}): IGetCategoriesAction {
  const action: IGetCategoriesAction = {
    type: MaterialSelectorActionTypes.GetCategories,
  };
  if (payload) {
    action.payload = payload;
  }
  return action;
}

export function loadCategories(
  payload: IMaterialCategoriesResponse
): ILoadCategoriesAction {
  return {
    type: MaterialSelectorActionTypes.LoadCategories,
    payload,
  };
}

export function resetIsLoading(): IResetIsLoadingAction {
  return {
    type: MaterialSelectorActionTypes.ResetIsLoading,
  };
}

export type MaterialSelectorActions =
  | IGetCategoriesAction
  | ILoadCategoriesAction
  | IResetIsLoadingAction;
