import { combineEpics, createEpicMiddleware } from 'redux-observable';

import {
  getProjectsEpic,
  postProjectEpic,
  deleteProjectEpic,
} from './ConstructionProjectsEpics';
import { getCategoriesEpic } from './MaterialSelectorEpics';

export const rootEpic = combineEpics(
  getProjectsEpic,
  postProjectEpic,
  deleteProjectEpic,
  getCategoriesEpic
);

export default createEpicMiddleware();
