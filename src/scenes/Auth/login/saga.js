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

          }else{
            yield put({type: TYPE.LOGIN.ERROR, error: response})
          }
      } catch (error) {
          yield all([
              put({type: TYPE.LOGIN.ERROR, error})
          ])
      }
  }
  
  function* watcher() {
      yield all([
          takeLatest(TYPE.LOGIN.REQUEST, getListSaga),
      ])
  }
  
  export default watcher