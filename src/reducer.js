import { combineReducers } from 'redux'

import wordReducer from './reducers/word'
// import filtersReducer from './features/filters/filtersSlice'

const rootReducer = combineReducers({
  word: wordReducer,
  // filters: filtersReducer,
})

export default rootReducer