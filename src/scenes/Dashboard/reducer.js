import { action_type as type } from './action'

const initialState = {
    loading: false,
    data: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.DASHBOARD.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.DASHBOARD.SUCCESS:
            return {
                ...state,
                    data: action.data,
                    loading: false,
            }
        case type.DASHBOARD.ERROR:
            return {
                ...state,
                    loading: false,
            }    
        default:
            return state
    }
}

export default reducer
