import { IMaterialCategoriesResponse } from '../../../services/MaterialSelectorService';
import { MaterialSelector } from '../../../models';

export enum MaterialSelectorActionTypes {
  GetCategories = 'Get Categories',
  LoadCategories = 'Load Categories',
  GetProducts = 'Get Products',
  LoadProducts = 'Load Products',
  ResetIsLoading = 'Is Loading',
  ShowInCart = 'Show In Cart',
  UnshowInCart = 'Unshow In Cart',
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
  payload: { category: MaterialSelector.IMaterialCategory };
}

export interface ILoadProductsAction {
  type: MaterialSelectorActionTypes.LoadProducts;
  payload: {
    category: MaterialSelector.IMaterialCategory;
    products: MaterialSelector.IMaterialProduct[];
  };
}

export interface IResetIsLoadingAction {
  type: MaterialSelectorActionTypes.ResetIsLoading;
}

export interface IShowInCartAction {
  type: MaterialSelectorActionTypes.ShowInCart;
  payload: {
    product: MaterialSelector.IMaterialProduct;
  };
}

export interface IAddToCartAction {
  type: MaterialSelectorActionTypes.AddToCart;
  payload: {
    productId: string;
    quantity: number;
  };
}

export interface IUnshowInCartAction {
  type: MaterialSelectorActionTypes.UnshowInCart;
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

export function getProducts(
  category: MaterialSelector.IMaterialCategory
): IGetProductsAction {
  return {
    type: MaterialSelectorActionTypes.GetProducts,
    payload: { category },
  };
}

export function loadProducts(
  category: MaterialSelector.IMaterialCategory,
  products: MaterialSelector.IMaterialProduct[]
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

export function showInCart(
  product: MaterialSelector.IMaterialProduct
): IShowInCartAction {
  return {
    type: MaterialSelectorActionTypes.ShowInCart,
    payload: {
      product,
    },
  };
}

export function addToCart(
  productId: string,
  quantity: number
): IAddToCartAction {
  return {
    type: MaterialSelectorActionTypes.AddToCart,
    payload: {
      productId,
      quantity,
    },
  };
}

export function unshowInCart(productId: string): IUnshowInCartAction {
  return {
    type: MaterialSelectorActionTypes.UnshowInCart,
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
  | IAddToCartAction
  | IUnshowInCartAction;
