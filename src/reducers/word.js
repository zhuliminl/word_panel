const initialState = {
  name: 'saul'
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'word/change': {
      return {
        ...state,
        name: 'xiaoshitou'
      }
    }
    default:
      return state
  }
}