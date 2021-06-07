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
import * as api from '../../apis/Prescriptions'
  
function* getDetailSaga(action) {
      try {
          const { id } = action
          const response = yield call(api.getDetail, id)
          if(response.status){
                  yield all([
                      put({type: TYPE.PRESCRIPTIONDETAIL.SUCCESS, ...response}),
                  ])
          }else{
            yield put({type: TYPE.PRESCRIPTIONDETAIL.ERROR, error: response})
          }
      } catch (error) {
          yield all([
              put({type: TYPE.PRESCRIPTIONDETAIL.ERROR, error})
          ])
      }
  }

  function* addMedicine(action) {
    try {
        const { data: {prescription_detail_id, ...data} } = action
        console.log({prescription_detail_id});
        const response = yield call(api.addMedicine, data)
        if(response.status){
                yield all([
                    put({type: TYPE.ADDMEDICINE.SUCCESS, ...response}),
                    put({type: TYPE.PRESCRIPTIONDETAIL.REQUEST, id: prescription_detail_id }),
                ])
        }else{
          yield put({type: TYPE.ADDMEDICINE.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.ADDMEDICINE.ERROR, error})
        ])
    }
}

function* addDetail(action) {
    try {
        const { data: {prescription_detail_id, ...data} } = action
        const response = yield call(api.addDetail, data)
        if(response.status){
                yield all([
                    put({type: TYPE.ADDDETAIL.SUCCESS, ...response}),
                    put({type: TYPE.PRESCRIPTIONDETAIL.REQUEST, id: prescription_detail_id }),
                ])
        }else{
          yield put({type: TYPE.ADDDETAIL.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.ADDDETAIL.ERROR, error})
        ])
    }
}
  
  
  function* watcher() {
      yield all([
          takeLatest(TYPE.PRESCRIPTIONDETAIL.REQUEST, getDetailSaga),
          takeLatest(TYPE.ADDMEDICINE.REQUEST, addMedicine),
          takeLatest(TYPE.ADDDETAIL.REQUEST, addDetail)
      ])
  }
  
  export default watcher