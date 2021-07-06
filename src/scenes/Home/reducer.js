import { action_type as type } from './action'

const initialState = {
    loading: false,
    prescription: [],
    medicine: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.GETPRESCRIPTION.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.GETPRESCRIPTION.SUCCESS:
            return {
                ...state,
                prescription: action.data,
                loading: false,
            }
        case type.GETPRESCRIPTION.ERROR:
            return {
                ...state,
                loading: false,
            }
        case type.GETMEDICINE.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.GETMEDICINE.SUCCESS:
            return {
                ...state,
                medicine: action.data,
                loading: false,
            }
        case type.GETMEDICINE.ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default reducer
