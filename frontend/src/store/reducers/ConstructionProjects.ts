import ConstructionProjectActions from '../actions/construction-projects';
import { IConstructionProject } from '../../models/ConstructionProject';

export interface IConstructionProjectsState {
  isLoading: boolean;
  byId: {
    [id: number]: IConstructionProject;
  };
  sorted: number[];
}

const initialState: IConstructionProjectsState = {
  isLoading: false,
  byId: {},
  sorted: [],
};

export const projectsReducer = (
  state: IConstructionProjectsState = initialState,
  action: ConstructionProjectActions.ProjectActions
): IConstructionProjectsState => {
  switch (action.type) {
    case ConstructionProjectActions.ProjectActionTypes.GetProjects:
      return {
        ...state,
        isLoading: true,
      };

    case ConstructionProjectActions.ProjectActionTypes.LoadProjects:
      const projects = action.payload.projects;
      const newState = {
        ...state,
        isLoading: false,
      };
      // Assumes sort from payload
      console.log('PROJECTS', projects);
      projects.forEach((project: IConstructionProject) => {
        newState.byId[project.id] = project;
        newState.sorted.push(project.id);
      });
      return newState;

    default:
      return state;
  }
};
