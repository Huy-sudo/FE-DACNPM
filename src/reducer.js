import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form'
import login from "./scenes/Auth/login/reducer";
import signup from "./scenes/Auth/signup/reducer";
import prescriptions from "./scenes/Prescription/reducer"
import Customers from "./scenes/Customers/reducer"
import prescriptionDetail from "./scenes/PrescriptionDetail/reducer"
import customerDetail from "./scenes/CustomerDetail/reducer"
import medical from "./scenes/Medical/reducer"
import dashboard from "./scenes/Dashboard/reducer"
import home from "./scenes/Home/reducer"


const Reducer = (history) => combineReducers({    
    form: formReducer,
    router: connectRouter(history),
    login,
    signup,
    prescriptions,
    Customers,
    prescriptionDetail,
    customerDetail,
    medical,
    dashboard,
    home
  })
  
export default Reducer