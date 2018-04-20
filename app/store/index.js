import { applyMiddleware , createStore } from 'redux'
import { createLogger } from 'redux-logger'
import reducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const middleWare = composeWithDevTools( applyMiddleware(createLogger()) )

const Store =  createStore(reducer , middleWare)

export default Store 