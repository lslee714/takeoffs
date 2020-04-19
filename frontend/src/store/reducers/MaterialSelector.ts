import MaterialSelectorActions from '../actions/material-selector';

export interface IMaterialSelectorState {
  isLoading: boolean;
  byId: {
    //toDO type
    [id: number]: any;
  };
  sorted: number[];
}

export const initialState: IMaterialSelectorState = {
  isLoading: false,
  byId: {},
  sorted: [],
};

export const materialSelectorReducer = (
  state: IMaterialSelectorState = initialState,
  action: MaterialSelectorActions.MaterialSelectorActions
): IMaterialSelectorState => {
  let newState: IMaterialSelectorState;
  switch (action.type) {
    case MaterialSelectorActions.MaterialSelectorActionTypes.GetDivisions:
      return {
        ...state,
        isLoading: true,
      };

    case MaterialSelectorActions.MaterialSelectorActionTypes.LoadDivisions:
      const divisions = action.payload.divisions;
      newState = {
        ...state,
        isLoading: false,
      };
      // Assumes sort from payload
      divisions.forEach((division: any) => {
        newState.byId[division.id] = division;
        newState.sorted.push(division.id);
      });
      return newState;

    default:
      return state;
  }
};
