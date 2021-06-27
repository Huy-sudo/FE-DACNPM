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
                      put({type: TYPE.PRESCRIPTION.SUCCESS, ...response}),
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

  function* getListMedicineSaga(action) {
    try {
        const { params } = action
        const response = yield call(api.getListMedicine, params)
        if(response.status){
                yield all([
                    put({type: TYPE.MEDICINE.SUCCESS, ...response}),
                ])
        }else{
          yield put({type: TYPE.MEDICINE.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.MEDICINE.ERROR, error})
        ])
    }
}
  
  function* watcher() {
      yield all([
          takeLatest(TYPE.PRESCRIPTION.REQUEST, getListPrescriptionSaga),
          takeLatest(TYPE.MEDICINE.REQUEST, getListMedicineSaga),
      ])
  }
  
  export default watcher