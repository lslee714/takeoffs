import { IMaterialCategoriesResponse } from '../../../services/MaterialSelectorService';
import {
  IMaterialProduct,
  IMaterialCategory,
} from '../../../models/MaterialSelector';

export enum MaterialSelectorActionTypes {
  GetCategories = 'Get Categories',
  LoadCategories = 'Load Categories',
  GetProducts = 'Get Products',
  LoadProducts = 'Load Products',
  ResetIsLoading = 'Is Loading',
  ShowInCart = 'Show In Cart',
  AddToCart = 'Add To Cart',
}

export interface IGetCategoriesAction {
  type: MaterialSelectorActionTypes.GetCategories;
  payload?: { perPage: number; page: number };
}

export interface ILoadCategoriesAction {
  type: MaterialSelectorActionTypes.LoadCategories;
  payload: IMaterialCategoriesResponse;
}

export interface IGetProductsAction {
  type: MaterialSelectorActionTypes.GetProducts;
  payload: { category: IMaterialCategory };
}

export interface ILoadProductsAction {
  type: MaterialSelectorActionTypes.LoadProducts;
  payload: { category: IMaterialCategory; products: IMaterialProduct[] };
}

export interface IResetIsLoadingAction {
  type: MaterialSelectorActionTypes.ResetIsLoading;
}

export interface IShowInCartAction {
  type: MaterialSelectorActionTypes.ShowInCart;
  payload: {
    product: IMaterialProduct;
  };
}

export interface IAddToCartAction {
  type: MaterialSelectorActionTypes.AddToCart;
  payload: {
    productId: string;
  };
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

export function getProducts(category: IMaterialCategory): IGetProductsAction {
  return {
    type: MaterialSelectorActionTypes.GetProducts,
    payload: { category },
  };
}

export function loadProducts(
  category: IMaterialCategory,
  products: IMaterialProduct[]
): ILoadProductsAction {
  return {
    type: MaterialSelectorActionTypes.LoadProducts,
    payload: { category, products },
  };
}

export function resetIsLoading(): IResetIsLoadingAction {
  return {
    type: MaterialSelectorActionTypes.ResetIsLoading,
  };
}

export function showInCart(product: IMaterialProduct): IShowInCartAction {
  return {
    type: MaterialSelectorActionTypes.ShowInCart,
    payload: {
      product,
    },
  };
}

export function addToCart(productId: string): IAddToCartAction {
  return {
    type: MaterialSelectorActionTypes.AddToCart,
    payload: { productId },
  };
}

export type MaterialSelectorActions =
  | IGetCategoriesAction
  | ILoadCategoriesAction
  | IResetIsLoadingAction
  | IGetProductsAction
  | ILoadProductsAction
  | IShowInCartAction
  | IAddToCartAction;
