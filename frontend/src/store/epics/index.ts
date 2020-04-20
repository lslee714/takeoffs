import { combineEpics, createEpicMiddleware } from 'redux-observable';

import {
  getProjectsEpic,
  postProjectEpic,
  deleteProjectEpic,
} from './ConstructionProjectsEpics';
import { getCategoriesEpic, getProductsEpic } from './MaterialSelectorEpics';

export const rootEpic = combineEpics(
  getProjectsEpic,
  postProjectEpic,
  deleteProjectEpic,
  getCategoriesEpic,
  getProductsEpic
);

export default createEpicMiddleware();
