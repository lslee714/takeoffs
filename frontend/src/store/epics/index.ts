import { combineEpics, createEpicMiddleware } from 'redux-observable';

import {
  getProjectsEpic,
  postProjectEpic,
  deleteProjectEpic,
} from './ConstructionProjectsEpics';

export const rootEpic = combineEpics(
  getProjectsEpic,
  postProjectEpic,
  deleteProjectEpic
);

export default createEpicMiddleware();
