import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { getProjectsEpic, postProjectEpic } from './ConstructionProjectsEpics';

export const rootEpic = combineEpics(getProjectsEpic, postProjectEpic);

export default createEpicMiddleware();
