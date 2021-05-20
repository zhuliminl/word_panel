const initialState = {
  name: 'saul'
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'word/change': {
      console.log('saul ....action', action)
      return {
        ...state,
        name: 'xiaoshitou'
      }
    }
    default:
      return state
  }
}