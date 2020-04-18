import { combineReducers } from 'redux';

import { appReducer, IAppState } from './AppReducer';

export interface IRootState {
  app: IAppState;
}

export const initialState: IRootState = {
  app: {
    isLoading: false,
  },
};

export default combineReducers({
  app: appReducer,
});
