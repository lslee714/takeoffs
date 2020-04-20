import MaterialSelectorActions from '../actions/material-selector';
import {
  IMaterialCategory,
  IMaterialProduct,
} from '../../models/MaterialSelector';

export interface IMaterialSelectorState {
  isLoading: boolean;
  categories: {
    byId: {
      [id: number]: IMaterialCategory;
    };
    sorted: number[];
    total: number;
  };
  products: {
    byCategoryId: {
      [categoryId: number]: IMaterialProduct[];
    };
    byId: {
      [id: number]: IMaterialProduct;
    };
    sorted: number[];
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
};

export const materialSelectorReducer = (
  state: IMaterialSelectorState = initialState,
  action: MaterialSelectorActions.MaterialSelectorActions
): IMaterialSelectorState => {
  let newState: IMaterialSelectorState;
  switch (action.type) {
    case MaterialSelectorActions.MaterialSelectorActionTypes.GetCategories:
      return {
        ...state,
        categories: {
          sorted: [],
          byId: {},
          ...state.categories,
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
      products.forEach((product: IMaterialProduct) => {
        newState.products.byId[product.id] = product;
        newState.products.sorted.push(product.id);
      });
      return newState;

    default:
      return state;
  }
};
