import { 
    takeLatest, 
    call, 
    put, 
    all,
    select
  } from 'redux-saga/effects'
import {
      action_type as TYPE
  } from './action'  
  import { push } from 'react-router-redux';   
   
import * as api from '../../apis/Customers'
import * as apiPrescription from '../../apis/Prescriptions'

  
function* getListSaga(action) {
      try {
          const { params } = action
          const response = yield call(api.getList, params)
          if(response.status){
                  yield all([
                      put({type: TYPE.CUSTOMER.SUCCESS, ...response}),
                  ])
          }else{
            yield put({type: TYPE.CUSTOMER.ERROR, error: response})
          }
      } catch (error) {
          yield all([
              put({type: TYPE.CUSTOMER.ERROR, error})
          ])
      }
  }
  
  function* CreateSaga(action) {
    try {
        const { params } = action
        let data = params
        const response = yield call(api.create, data)
        if(response.status){
                yield all([
                    put({type: TYPE.CREATE.SUCCESS, ...response}),
                    put({type: TYPE.CUSTOMER.REQUEST, params:{status:1}})
                ])
        }else{
          yield put({type: TYPE.CREATE.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.CREATE.ERROR, error})
        ])
    }
}

function* CreatePrescriptionSaga(action) {
    try {
        const { data } = action
        const response = yield call(apiPrescription.create, data)
        if(response.status){
                yield all([
                    put({type: TYPE.PRESCRIPTION.SUCCESS, ...response}),
                    yield put(push('/prescription'))
                ])
        }else{
          yield put({type: TYPE.PRESCRIPTION.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.PRESCRIPTION.ERROR, error})
        ])
    }
}

function* deleteCustomerSaga(action) {
    try {
        const { id } = action
        const response = yield call(api.destroy, id)
        if(response.status){
                yield all([
                    put({type: TYPE.DELETECUSTOMER.SUCCESS, ...response}),
                    put({type: TYPE.CUSTOMER.REQUEST, params:{status:1}}),
                ])
        }else{
          yield put({type: TYPE.DELETECUSTOMER.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.DELETECUSTOMER.ERROR, error})
        ])
    }
}


  function* watcher() {
      yield all([
          takeLatest(TYPE.CUSTOMER.REQUEST, getListSaga),
          takeLatest(TYPE.CREATE.REQUEST, CreateSaga),
          takeLatest(TYPE.PRESCRIPTION.REQUEST, CreatePrescriptionSaga),
          takeLatest(TYPE.DELETECUSTOMER.REQUEST, deleteCustomerSaga),
      ])
  }
  
  export default watcher