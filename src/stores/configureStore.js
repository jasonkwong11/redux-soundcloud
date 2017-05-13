import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/index';

const logger = createLogger();
// sync our store with the browser history, so we can
// listen later on to events based on our current route
// additionally, properties like browser path and 
// query params in the URL can be accessed in the store
const router = routerMiddleware(browserHistory);

const createStoreWithMiddleWare = applyMiddleware(router, logger)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleWare(rootReducer, initialState);
}
