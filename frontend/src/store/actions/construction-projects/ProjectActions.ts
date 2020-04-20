import { ConstructionProject } from '../../../models';

export enum ProjectActionTypes {
  GetProjects = 'Get Projects',
  LoadProjects = 'Projects Loaded',
  ResetIsLoading = 'Projects Reset Is Loading',
  CreateProject = 'Create Project',
  DeleteProject = 'Delete Project',
  SaveProject = 'Save Project',
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

export interface IDeleteProjectAction {
  type: ProjectActionTypes.DeleteProject;
  payload: { id: number; link: string };
}

export interface ISaveProjectAction {
  type: ProjectActionTypes.SaveProject;
  payload: {
    saveLink: string;
    cart: { [productId: string]: number };
  };
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

export function deleteProject(payload: {
  id: number;
  link: string;
}): IDeleteProjectAction {
  return {
    type: ProjectActionTypes.DeleteProject,
    payload: { id: payload.id, link: payload.link },
  };
}

export function saveProject(payload: {
  saveLink: string;
  cart: { [productId: string]: number };
}): ISaveProjectAction {
  return {
    type: ProjectActionTypes.SaveProject,
    payload,
  };
}

export type ProjectActions =
  | IGetProjectsAction
  | ILoadProjectsAction
  | IResetIsLoadingAction
  | ICreateProjectAction
  | IDeleteProjectAction
  | ISaveProjectAction;
