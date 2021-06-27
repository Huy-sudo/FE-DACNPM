export const action_type = {
    PRESCRIPTIONDETAIL: {
        REQUEST: "PRESCRIPTIONDETAIL.REQUEST",
        SUCCESS: "PRESCRIPTIONDETAIL.SUCCESS",
        ERROR: "PRESCRIPTIONDETAIL.ERROR"
    },
    ADDMEDICINEPD: {
        REQUEST: "ADDMEDICINEPD.REQUEST",
        SUCCESS: "ADDMEDICINEPD.SUCCESS",
        ERROR: "ADDMEDICINEPD.ERROR"
    },
    DELETEMEDICINEPD: {
        REQUEST: "DELETEMEDICINEPD.REQUEST",
        SUCCESS: "DELETEMEDICINEPD.SUCCESS",
        ERROR: "DELETEMEDICINEPD.ERROR"
    },
    ADDDETAIL: {
        REQUEST: "ADDDETAIL.REQUEST",
        SUCCESS: "ADDDETAIL.SUCCESS",
        ERROR: "ADDDETAIL.ERROR"
    },
    SYMPTOMS: {
        REQUEST: "SYMPTOMS.GET_LIST.REQUEST",
        SUCCESS: "SYMPTOMS.GET_LIST.SUCCESS",
        ERROR: "SYMPTOMS.GET_LIST.ERROR"
    },
    USES: {
        REQUEST: "USES.GET_LIST.REQUEST",
        SUCCESS: "USES.GET_LIST.SUCCESS",
        ERROR: "USES.GET_LIST.ERROR"
    },
    UPDATE: {
        REQUEST: "PRESCRIPTION.UPDATE.REQUEST",
        SUCCESS: "PRESCRIPTION.UPDATE.SUCCESS",
        ERROR: "PRESCRIPTION.UPDATE.ERROR"
    },
    CREATEBILL: {
        REQUEST: "CREATEBILL.REQUEST",
        SUCCESS: "CREATEBILL.SUCCESS",
        ERROR: "CREATEBILL.ERROR"
    },
    UPDATEBILL: {
        REQUEST: "UPDATEBILL.REQUEST",
        SUCCESS: "UPDATEBILL.SUCCESS",
        ERROR: "UPDATEBILL.ERROR"
    }
}

export function getDetail (id)
{
    return {
        type: action_type.PRESCRIPTIONDETAIL.REQUEST,
        id,
    }
}

export function addMedicinePD (data)
{
    return {
        type: action_type.ADDMEDICINEPD.REQUEST,
        data,
    }
}

export function deleteMedicinePD (id, idPD)
{
    return {
        type: action_type.DELETEMEDICINEPD.REQUEST,
        id,
        idPD
    }
}

export function addDetail (data)
{
    return {
        type: action_type.ADDDETAIL.REQUEST,
        data,
    }
}

export function getListSymptoms (params){
    return {
        type: action_type.SYMPTOMS.REQUEST,
        params,
    }
}

export function getListUses (params){
    return {
        type: action_type.USES.REQUEST,
        params,
    }
}

export function update (id, data){
    return {
        type: action_type.UPDATE.REQUEST,
        id,
        data
    }
}

export function createBill (params){
    return {
        type: action_type.CREATEBILL.REQUEST,
        params
    }
}

export function updateBill (id, data){
    return {
        type: action_type.UPDATEBILL.REQUEST,
        id,
        data
    }
}