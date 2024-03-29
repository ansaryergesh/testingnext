import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './reducers'
const initialState = {

}


const store  = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
