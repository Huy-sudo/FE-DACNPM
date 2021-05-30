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
import * as api from '../../apis/Customers'
  
function* getDetailSaga(action) {
      try {
          const { id } = action
          const response = yield call(api.getDetail, id)
          if(response.status){
                  yield all([
                      put({type: TYPE.CUSTOMERDETAIL.SUCCESS, ...response}),
                  ])
          }else{
            yield put({type: TYPE.CUSTOMERDETAIL.ERROR, error: response})
          }
      } catch (error) {
          yield all([
              put({type: TYPE.CUSTOMERDETAIL.ERROR, error})
          ])
      }
  }
  
  function* watcher() {
      yield all([
          takeLatest(TYPE.CUSTOMERDETAIL.REQUEST, getDetailSaga),
      ])
  }
  
  export default watcher