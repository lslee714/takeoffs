import { ConstructionProject } from '../../../models';

export enum ProjectActionTypes {
  GetProjects = 'Get Projects',
  LoadProjects = 'Projects Loaded',
  ResetIsLoading = 'Projects Reset Is Loading',
  CreateProject = 'Create Project',
}

export interface IGetProjectsAction {
  type: ProjectActionTypes.GetProjects;
}

export interface ILoadProjectsAction {
  type: ProjectActionTypes.LoadProjects;
  payload: { projects: ConstructionProject.IConstructionProject[] };
}

export interface IResetIsLoadingAction {
  type: ProjectActionTypes.ResetIsLoading;
}

export interface ICreateProjectAction {
  type: ProjectActionTypes.CreateProject;
  payload: { project: ConstructionProject.IConstructionProject };
}

export function getProjects(): IGetProjectsAction {
  return {
    type: ProjectActionTypes.GetProjects,
  };
}

export function loadProjects(
  projects: ConstructionProject.IConstructionProject[]
): ILoadProjectsAction {
  return {
    type: ProjectActionTypes.LoadProjects,
    payload: { projects },
  };
}

export function resetIsLoading(): IResetIsLoadingAction {
  return {
    type: ProjectActionTypes.ResetIsLoading,
  };
}

export function createProject(
  project: ConstructionProject.IConstructionProject
): ICreateProjectAction {
  return {
    type: ProjectActionTypes.CreateProject,
    payload: { project },
  };
}

export type ProjectActions =
  | IGetProjectsAction
  | ILoadProjectsAction
  | IResetIsLoadingAction
  | ICreateProjectAction;
