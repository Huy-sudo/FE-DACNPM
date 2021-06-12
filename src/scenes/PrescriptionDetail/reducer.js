import { action_type as type } from './action'

const initialState = {
    loading: false,
    data: [],
    symtoms: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.PRESCRIPTIONDETAIL.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.PRESCRIPTIONDETAIL.SUCCESS:
            return {
                ...state,
                    data: action.data,
                    loading: false,
            }
        case type.PRESCRIPTIONDETAIL.ERROR:
            return {
                ...state,
                    loading: false,
            }  
        case type.SYMPTOMS.REQUEST:
            return {
                ...state,
            }
        case type.SYMPTOMS.SUCCESS:
            return {
                ...state,
                    symtoms: action.data,
            }
        case type.SYMPTOMS.ERROR:
            return {
                ...state,
            }
            
        case type.UPDATE.REQUEST:
            console.log(action);
            return {
                ...state,
                loading: true
            }
        case type.UPDATE.SUCCESS:
        case type.UPDATE.ERROR:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default reducer
