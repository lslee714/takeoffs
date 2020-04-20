import { combineEpics, createEpicMiddleware } from 'redux-observable';

import {
  getProjectsEpic,
  postProjectEpic,
  deleteProjectEpic,
  saveProjectEpic,
} from './ConstructionProjectsEpics';
import { getCategoriesEpic, getProductsEpic } from './MaterialSelectorEpics';

export const rootEpic = combineEpics(
  getProjectsEpic,
  postProjectEpic,
  deleteProjectEpic,
  saveProjectEpic,
  getCategoriesEpic,
  getProductsEpic
);

export default createEpicMiddleware();
