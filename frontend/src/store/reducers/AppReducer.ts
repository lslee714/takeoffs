import AppActions from '../actions/app';

export interface IAppState {
  isLoading: boolean;
}

const initialState: IAppState = {
  isLoading: false,
};

export const appReducer = (
  state: IAppState = initialState,
  action: AppActions.AppActions
): IAppState => {
  switch (action.type) {
    case AppActions.AppActionTypes.AppInit:
      return {
        isLoading: true,
      };

    case AppActions.AppActionTypes.AppLoad:
      return {
        isLoading: false,
      };

    default:
      return state;
  }
};
