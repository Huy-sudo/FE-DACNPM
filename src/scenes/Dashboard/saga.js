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
import * as api from '../../apis/Variables'
  
function* getListSaga(action) {
      try {
          const { params } = action
          const response = yield call(api.getList, params)
          if(response.status){
                  yield all([
                      put({type: TYPE.DASHBOARD.SUCCESS, ...response}),
                  ])
          }else{
            yield put({type: TYPE.DASHBOARD.ERROR, error: response})
          }
      } catch (error) {
          yield all([
              put({type: TYPE.DASHBOARD.ERROR, error})
          ])
      }
  }

  function* update(action) {
    try {
        const { id, data } = action
        const response = yield call(api.update, id, data)
        if(response.status){
                yield all([
                    put({type: TYPE.UPDATE.SUCCESS, ...response}),
                    put({type: TYPE.DASHBOARD.REQUEST}),
                ])
        }else{
          yield put({type: TYPE.UPDATE.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.UPDATE.ERROR, error})
        ])
    }
}
  
  
  function* watcher() {
      yield all([
          takeLatest(TYPE.DASHBOARD.REQUEST, getListSaga),
          takeLatest(TYPE.UPDATE.REQUEST, update)
      ])
  }
  
  export default watcher