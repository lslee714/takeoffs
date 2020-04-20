import MaterialSelectorActions from '../actions/material-selector';
import { IMaterialCategory } from '../../models/MaterialSelector';

export interface IMaterialSelectorState {
  isLoading: boolean;
  categories: {
    byId: {
      [id: number]: IMaterialCategory;
    };
    sorted: number[];
    total: number;
  };
  subCategories: {
    byId: {
      [id: number]: IMaterialCategory;
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
  subCategories: {
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
          total: 0,
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

    default:
      return state;
  }
};
