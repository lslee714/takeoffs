import MaterialSelectorActions from '../actions/material-selector';
import { MaterialSelector } from '../../models';

export interface IMaterialSelectorState {
  isLoading: boolean;
  categories: {
    byId: {
      [id: number]: MaterialSelector.IMaterialCategory;
    };
    sorted: number[];
    total: number;
  };
  products: {
    byCategoryId: {
      [categoryId: number]: MaterialSelector.IMaterialProduct[];
    };
    byId: {
      [id: string]: MaterialSelector.IMaterialProduct;
    };
    sorted: string[];
  };
  cart: {
    shown: string[];
    added: {
      [productId: string]: number;
    };
  };
}

export const initialState: IMaterialSelectorState = {
  isLoading: false,
  categories: {
    byId: {},
    sorted: [],
    total: 0,
  },
  products: {
    byCategoryId: {},
    byId: {},
    sorted: [],
  },
  cart: {
    shown: [],
    added: {},
  },
};

export const materialSelectorReducer = (
  state: IMaterialSelectorState = initialState,
  action: MaterialSelectorActions.MaterialSelectorActions
): IMaterialSelectorState => {
  let productId: string;
  let newState: IMaterialSelectorState;
  switch (action.type) {
    case MaterialSelectorActions.MaterialSelectorActionTypes.GetCategories:
      return {
        ...state,
        categories: {
          ...state.categories,
          sorted: [],
          byId: {},
        },
        isLoading: true,
      };

    case MaterialSelectorActions.MaterialSelectorActionTypes.LoadCategories:
      const categories = action.payload.categories;
      newState = {
        ...state,
        isLoading: false,
      };
      newState.categories.total = action.payload.total;
      // Assumes sort from payload
      categories.forEach((category: any) => {
        newState.categories.byId[category.id] = category;
        newState.categories.sorted.push(category.id);
      });
      return newState;

    case MaterialSelectorActions.MaterialSelectorActionTypes.LoadProducts:
      const products = action.payload.products;
      newState = {
        ...state,
        products: {
          ...state.products,
          byCategoryId: {
            ...state.products.byCategoryId,
            [action.payload.category.id]: products,
          },
        },
      };
      products.forEach((product: MaterialSelector.IMaterialProduct) => {
        newState.products.byId[product.id] = product;
        newState.products.sorted.push(product.id);
      });
      return newState;

    case MaterialSelectorActions.MaterialSelectorActionTypes.ShowInCart:
      const product = action.payload.product;
      newState = {
        ...state,
      };
      const currentIndex = newState.cart.shown.indexOf(product.id);
      const alreadyExists = currentIndex > -1;
      if (alreadyExists) {
        newState.cart.shown.splice(currentIndex, 1);
      } else {
        newState.cart.shown = [...newState.cart.shown, product.id];
      }
      return newState;

    case MaterialSelectorActions.MaterialSelectorActionTypes.UnshowInCart:
      productId = action.payload.productId;
      newState = {
        ...state,
      };
      const idx = newState.cart.shown.indexOf(productId);
      newState.cart.shown.splice(idx, 1);
      return newState;

    case MaterialSelectorActions.MaterialSelectorActionTypes.AddToCart:
      productId = action.payload.productId;
      return {
        ...state,
        cart: {
          ...state.cart,
          added: {
            ...state.cart.added,
            [productId]: action.payload.quantity,
          },
        },
      };

    default:
      return state;
  }
};
