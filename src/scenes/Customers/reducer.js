import { action_type as type } from './action'

const initialState = {
    loading: false,
    data: [],

}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.CUSTOMER.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.CUSTOMER.SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
            }
        case type.CUSTOMER.ERROR:
            return {
                ...state,
                loading: false,
            }
        case type.PRESCRIPTION.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.PRESCRIPTION.SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
            }
        case type.PRESCRIPTION.ERROR:
            return {
                ...state,
                loading: false,
            }
        case type.CREATE.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.CREATE.SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case type.CREATE.ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default reducer
