import { action_type as type } from './action'

const initialState = {
    loading: false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.LOGIN.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.LOGIN.SUCCESS:
            return {
                ...state,

                    loading: false,
            }
        case type.LOGIN.ERROR:
            return {
                ...state,
                    loading: false,
            }    
        default:
            return state
    }
}

export default reducer
