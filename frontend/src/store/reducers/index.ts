import { combineReducers } from 'redux';

import {
  IConstructionProjectsState,
  projectsReducer,
  initialState as initialProjectsState,
} from './ConstructionProjects';

import {
  IMaterialSelectorState,
  materialSelectorReducer,
  initialState as initialMaterialSelectorState,
} from './MaterialSelector';

export interface IRootState {
  projects: IConstructionProjectsState;
  materialSelector: IMaterialSelectorState;
}

export const initialState: IRootState = {
  projects: {
    ...initialProjectsState,
  },
  materialSelector: {
    ...initialMaterialSelectorState,
  },
};

export default combineReducers({
  projects: projectsReducer,
  materialSelector: materialSelectorReducer,
});
