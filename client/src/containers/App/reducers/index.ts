import produce from 'immer'

// Initalize state for App container
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    //
  }
}

const appReducer = (state = initialState, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      case 'LOAD_REPOS':
        draft.loading = true
        draft.error = false
        break
    }
  })

export default appReducer
