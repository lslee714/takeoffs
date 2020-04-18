import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import epicMiddleware, { rootEpic } from './epics';
import rootReducer, { initialState } from './reducers';

const composeEnhancer = composeWithDevTools({
  name: 'Takeoffs Frontend',
});

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

export default store;
