import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import * as reducers from './reducers';

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      ...reducers,
    }),
    applyMiddleware(
      thunk,
    )
  );
}
