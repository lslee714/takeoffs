import { combineReducers } from 'redux';

import {
  IConstructionProjectsState,
  projectsReducer,
} from './ConstructionProjects';

export interface IRootState {
  projects: IConstructionProjectsState;
}

export const initialState: IRootState = {
  projects: {
    isLoading: false,
    byId: {},
    sorted: [],
  },
};

export default combineReducers({
  projects: projectsReducer,
});
