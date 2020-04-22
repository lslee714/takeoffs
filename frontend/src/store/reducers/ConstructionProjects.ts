import ConstructionProjectActions from '../actions/construction-projects';
import { IConstructionProject } from '../../models/ConstructionProject';

export interface IConstructionProjectsState {
  isLoading: boolean;
  byId: {
    [id: number]: IConstructionProject;
  };
  sorted: number[];
  saveIsComplete: boolean;
}

export const initialState: IConstructionProjectsState = {
  isLoading: false,
  byId: {},
  sorted: [],
  saveIsComplete: false,
};

export const projectsReducer = (
  state: IConstructionProjectsState = initialState,
  action: ConstructionProjectActions.ProjectActions
): IConstructionProjectsState => {
  let newState: IConstructionProjectsState;
  switch (action.type) {
    case ConstructionProjectActions.ProjectActionTypes.GetProjects:
      return {
        ...state,
        isLoading: true,
      };

    case ConstructionProjectActions.ProjectActionTypes.CreateProject:
      return {
        ...state,
        isLoading: true,
      };

    case ConstructionProjectActions.ProjectActionTypes.DeleteProject:
      const id = action.payload.id;
      newState = {
        ...state,
      };
      delete newState.byId[id];
      newState.sorted.splice(newState.sorted.indexOf(id), 1);
      return newState;

    case ConstructionProjectActions.ProjectActionTypes.LoadProjects:
      const projects = action.payload.projects;
      newState = {
        ...state,
        isLoading: false,
      };
      // Assumes sort from payload
      projects.forEach((project: IConstructionProject) => {
        newState.byId[project.id] = project;
        newState.sorted.push(project.id);
      });
      return newState;

    case ConstructionProjectActions.ProjectActionTypes.SaveProjectCart:
      return {
        ...state,
        saveIsComplete: false,
      };

    case ConstructionProjectActions.ProjectActionTypes.CompleteSaveIsLoading:
      return {
        ...state,
        saveIsComplete: true,
      };
    default:
      return state;
  }
};
