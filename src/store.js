import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
import thunk from 'redux-thunk';
// import { print1, print2, print3 } from './exampleAddons/middleware'

const composedEnhancer = composeWithDevTools(
  // Add whatever middleware you actually want to use here
  applyMiddleware(thunk)
  // other store enhancers if any
)

const store = createStore(rootReducer, composedEnhancer)
export default store