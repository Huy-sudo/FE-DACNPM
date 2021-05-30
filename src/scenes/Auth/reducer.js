import { combineReducers } from 'redux'
const initialState = {
    login: []
}
const login = (state = initialState, action) => {
    switch (action.type) {
        case "655115":
            
            break;
    
        default: 
            return state;
    }
}

  
const reducer = combineReducers({
    login,
    // login,
})

export default reducer