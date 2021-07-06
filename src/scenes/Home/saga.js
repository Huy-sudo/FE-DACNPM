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
import * as api from '../../apis/Home'
  
function* getListPrescriptionSaga(action) {
      try {
          const { params } = action
          const response = yield call(api.getListPrescription, params)
          if(response.status){
                  yield all([
                      put({type: TYPE.GETPRESCRIPTION.SUCCESS, ...response}),
                  ])
          }else{
            yield put({type: TYPE.GETPRESCRIPTION.ERROR, error: response})
          }
      } catch (error) {
          yield all([
              put({type: TYPE.GETPRESCRIPTION.ERROR, error})
          ])
      }
  }

  function* getListMedicineSaga(action) {
    try {
        const { params } = action
        const response = yield call(api.getListMedicine, params)
        if(response.status){
                yield all([
                    put({type: TYPE.GETMEDICINE.SUCCESS, ...response}),
                ])
        }else{
          yield put({type: TYPE.GETMEDICINE.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.GETMEDICINE.ERROR, error})
        ])
    }
}
  
  function* watcher() {
      yield all([
          takeLatest(TYPE.GETPRESCRIPTION.REQUEST, getListPrescriptionSaga),
          takeLatest(TYPE.GETMEDICINE.REQUEST, getListMedicineSaga),
      ])
  }
  
  export default watcher