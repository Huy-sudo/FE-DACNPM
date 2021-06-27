import { action_type as type } from './action'

const initialState = {
    loading: false,
    data: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
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
            case type.MEDICINE.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.MEDICINE.SUCCESS:
            return {
                ...state,
                    data: action.data,
                    loading: false,
            }
        case type.MEDICINE.ERROR:
            return {
                ...state,
                    loading: false,
            }    
        default:
            return state
    }
}

export default reducer
