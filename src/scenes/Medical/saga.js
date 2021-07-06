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
import * as api from '../../apis/Medical'
import * as apiUses from '../../apis/Uses'
  
function* getListSaga(action) {
      try {
          const { params } = action
          const response = yield call(api.getList, params)
          if(response.status){
                  yield all([
                      put({type: TYPE.MEDICAL.SUCCESS, ...response}),
                  ])
          }else{
            yield put({type: TYPE.MEDICAL.ERROR, error: response})
          }
      } catch (error) {
          yield all([
              put({type: TYPE.MEDICAL.ERROR, error})
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
                    put({type: TYPE.MEDICAL.REQUEST}),
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

function* addMedicine(action) {
    try {
        const { data } = action
        const response = yield call(api.addMedicine, data)
        if(response.status){
                yield all([
                    put({type: TYPE.ADDMEDICINE.SUCCESS, ...response}),
                    put({type: TYPE.MEDICAL.REQUEST }),
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

function* createMedicine(action) {
    try {
        const { data } = action
        const response = yield call(api.createMedicine, data)
        if(response.status){
                yield all([
                    put({type: TYPE.CREATEMEDICINE.SUCCESS, ...response}),
                    put({type: TYPE.MEDICAL.REQUEST }),
                ])
        }else{
          yield put({type: TYPE.CREATEMEDICINE.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.CREATEMEDICINE.ERROR, error})
        ])
    }
}

function* deleteMedicine(action) {
    try {
        const { id } = action
        const response = yield call(api.deleteMedicine, id)
        if(response.status){
                yield all([
                    put({type: TYPE.DELETEMEDICINE.SUCCESS, ...response}),
                ])
        }else{
          yield put({type: TYPE.DELETEMEDICINE.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.DELETEMEDICINE.ERROR, error})
        ])
    }
}

function* getListUseSaga(action) {
    try {
        const { params } = action
        const response = yield call(apiUses.getList, params)
        if(response.status){
                yield all([
                    put({type: TYPE.USES.SUCCESS, ...response}),
                ])
        }else{
          yield put({type: TYPE.USES.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.USES.ERROR, error})
        ])
    }
}

function* getListUnitSaga(action) {
    try {
        const { params } = action
        const response = yield call(api.getListUnit, params)
        if(response.status){
                yield all([
                    put({type: TYPE.UNIT.SUCCESS, ...response}),
                ])
        }else{
          yield put({type: TYPE.UNIT.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.UNIT.ERROR, error})
        ])
    }
}
  
  function* watcher() {
      yield all([
          takeLatest(TYPE.MEDICAL.REQUEST, getListSaga),
          takeLatest(TYPE.UPDATE.REQUEST, update),
          takeLatest(TYPE.ADDMEDICINE.REQUEST, addMedicine),
          takeLatest(TYPE.CREATEMEDICINE.REQUEST, createMedicine),
          takeLatest(TYPE.USES.REQUEST, getListUseSaga),
          takeLatest(TYPE.DELETEMEDICINE.REQUEST, deleteMedicine),
          takeLatest(TYPE.UNIT.REQUEST, getListUnitSaga),
      ])
  }
  
  export default watcher