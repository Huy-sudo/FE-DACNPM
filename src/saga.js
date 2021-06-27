import { all } from 'redux-saga/effects'
import loginSaga from "./scenes/Auth/login/saga";
import signupSaga from "./scenes/Auth/signup/saga";
import prescriptionsSaga from "./scenes/Prescription/saga"
import CustomersSaga from "./scenes/Customers/saga"
import prescriptionDetailSaga from "./scenes/PrescriptionDetail/saga"
import customerDetailSaga from "./scenes/CustomerDetail/saga"
import medicalSaga from "./scenes/Medical/saga"
import ListenSaga from "./scenes/Auth/saga";
import DashboardSaga from "./scenes/Dashboard/saga";
import HomeSaga from "./scenes/Home/saga"
const Saga = function* (){
    yield all([
      loginSaga(),
      signupSaga(),
      prescriptionsSaga(),
      CustomersSaga(),
      prescriptionDetailSaga(),
      customerDetailSaga(),
      medicalSaga(),
      ListenSaga(),
      DashboardSaga(),
      HomeSaga()
    ])
  }
  
  export default Saga