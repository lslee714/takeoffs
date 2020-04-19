import { IMaterialGroup } from '../../../models/MaterialSelector';

export enum MaterialSelectorActionTypes {
  GetCategories = 'Get Categories',
  LoadCategories = 'Load Categories',
  ResetIsLoading = 'Is Loading',
}

export interface IGetCategoriesAction {
  type: MaterialSelectorActionTypes.GetCategories;
}

export interface ILoadCategoriesAction {
  type: MaterialSelectorActionTypes.LoadCategories;
  payload: { categories: IMaterialGroup[] };
}

export interface IResetIsLoadingAction {
  type: MaterialSelectorActionTypes.ResetIsLoading;
}

export function getCategories(): IGetCategoriesAction {
  return {
    type: MaterialSelectorActionTypes.GetCategories,
  };
}

export function loadCategories(
  categories: IMaterialGroup[]
): ILoadCategoriesAction {
  return {
    type: MaterialSelectorActionTypes.LoadCategories,
    payload: { categories },
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
