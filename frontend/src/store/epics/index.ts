import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { getProjectsEpic } from './ConstructionProjectsEpics';

export const rootEpic = combineEpics(getProjectsEpic);

export default createEpicMiddleware();
