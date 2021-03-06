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
import * as apiSymtoms from '../../apis/symptoms'
import * as apiUses from '../../apis/Uses'
import * as apiBill from '../../apis/Bill'

  
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

  function* addMedicinePD(action) {
    try {
        const { data: {prescription_detail_id, ...data} } = action
        const response = yield call(api.addMedicinePD, data)
        if(response.status){
                yield all([
                    put({type: TYPE.ADDMEDICINEPD.SUCCESS, ...response}),
                    put({type: TYPE.PRESCRIPTIONDETAIL.REQUEST, id: prescription_detail_id }),
                ])
        }else{
          yield put({type: TYPE.ADDMEDICINEPD.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.ADDMEDICINEPD.ERROR, error})
        ])
    }
}

function* deleteMedicinePD(action) {
    try {
        const { id, idPD } = action
        console.log(action);
        const response = yield call(api.deleteMedicinePD, id)
        if(response.status){
                yield all([
                    put({type: TYPE.DELETEMEDICINEPD.SUCCESS, ...response}),
                    put({type: TYPE.PRESCRIPTIONDETAIL.REQUEST, id: idPD }),
                ])
        }else{
          yield put({type: TYPE.DELETEMEDICINEPD.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.DELETEMEDICINEPD.ERROR, error})
        ])
    }
}

function* addDetail(action) {
    try {
        const { data: {prescription_detail_id, ...data} } = action
        const response = yield call(api.update, data)
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

function* getListSymptomSaga(action) {
    try {
        const { params } = action
        const response = yield call(apiSymtoms.getList, params)
        if(response.status){
                yield all([
                    put({type: TYPE.SYMPTOMS.SUCCESS, ...response}),
                ])
        }else{
          yield put({type: TYPE.SYMPTOMS.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.SYMPTOMS.ERROR, error})
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

function* updateSymptom(action) {
    try {
        const { id, data } = action
        const response = yield call(api.update, id, data)
        if(response.status){
                yield all([
                    put({type: TYPE.UPDATE.SUCCESS, ...response}),
                    put({type: TYPE.PRESCRIPTIONDETAIL.REQUEST, id }),
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

function* createBill(action) {
    try {
        const { params } = action
        const response = yield call(apiBill.create, params)
        if(response.status){
                yield all([
                    put({type: TYPE.CREATEBILL.SUCCESS, ...response}),
                ])
        }else{
          yield put({type: TYPE.CREATEBILL.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.CREATEBILL.ERROR, error})
        ])
    }
}

function* updateBill(action) {
    try {
        const { id, data } = action
        const response = yield call(apiBill.update, id, data)
        if(response.status){
                yield all([
                    put({type: TYPE.UPDATEBILL.SUCCESS, ...response}),
                ])
        }else{
          yield put({type: TYPE.UPDATEBILL.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.UPDATEBILL.ERROR, error})
        ])
    }
}

function* createInventory(action) {
    try {
        const { params } = action
        const response = yield call(api.createInventory, params)
        if(response.status){
                yield all([
                    put({type: TYPE.CREATEINVENTORY.SUCCESS, ...response}),
                ])
        }else{
          yield put({type: TYPE.CREATEINVENTORY.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.CREATEINVENTORY.ERROR, error})
        ])
    }
}
  
  function* watcher() {
      yield all([
          takeLatest(TYPE.PRESCRIPTIONDETAIL.REQUEST, getDetailSaga),
          takeLatest(TYPE.ADDMEDICINEPD.REQUEST, addMedicinePD),
          takeLatest(TYPE.ADDDETAIL.REQUEST, addDetail),
          takeLatest(TYPE.SYMPTOMS.REQUEST, getListSymptomSaga),
          takeLatest(TYPE.UPDATE.REQUEST, updateSymptom),
          takeLatest(TYPE.USES.REQUEST, getListUseSaga),
          takeLatest(TYPE.DELETEMEDICINEPD.REQUEST, deleteMedicinePD),
          takeLatest(TYPE.CREATEBILL.REQUEST, createBill),
          takeLatest(TYPE.UPDATEBILL.REQUEST, updateBill),
          takeLatest(TYPE.CREATEINVENTORY.REQUEST, createInventory)
      ])
  }
  
  export default watcher