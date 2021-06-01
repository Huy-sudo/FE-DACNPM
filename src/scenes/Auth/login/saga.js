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
import * as api from '../../../apis/Auth'
import Cookies from 'js-cookie'
  
function* getListSaga(action) {
      try {
          const { params } = action
          params.remember_me = true
          let data = params
          const response = yield call(api.login, data)
          if(response.status){
                  yield all([
                      put({type: TYPE.LOGIN.SUCCESS, ...response}),
                  ])
                  Cookies.set('web_token',response.access_token)
                  yield put(push('/prescription'));
                  yield put({type: TYPE.VERIFY.REQUEST,})

          }else{
            yield put({type: TYPE.LOGIN.ERROR, error: response})
          }
      } catch (error) {
          yield all([
              put({type: TYPE.LOGIN.ERROR, error})
          ])
      }
  }
  function* verifySaga(action) {
    try {
        const params = {};
        const response = yield call(api.verify, params)
        if(response.status && response.data?.id > 0){
                yield all([
                    put({type: TYPE.VERIFY.SUCCESS, ...response}),
                ])
        }else{
            Cookies.set('web_token','')
            yield put(push('/login'))
        }
    } catch (error) {
        yield all([
            put({type: TYPE.VERIFY.ERROR, error})
        ])
    }
}
  function* watcher() {
      yield all([
          takeLatest(TYPE.LOGIN.REQUEST, getListSaga),
          takeLatest(TYPE.VERIFY.REQUEST, verifySaga),
          
      ])
  }
  
  export default watcher