import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import epicMiddleware, { rootEpic } from './epics';
import rootReducer, { initialState } from './reducers';

const composeEnhancer = composeWithDevTools({
  name: 'Takeoffs Frontend',
});

//Middlware shares different interface, so type as any to push to same array
const middleWare: any[] = [epicMiddleware];
if (process.env.NODE_ENV === 'development') {
  middleWare.push(logger);
}

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(...middleWare))
);

epicMiddleware.run(rootEpic);

export default store;
