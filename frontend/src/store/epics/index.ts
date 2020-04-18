import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { appInitEpic } from './AppEpics';

export const rootEpic = combineEpics(appInitEpic);

export default createEpicMiddleware();
