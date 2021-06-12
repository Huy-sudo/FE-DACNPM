export const action_type = {
    PRESCRIPTIONDETAIL: {
        REQUEST: "PRESCRIPTIONDETAIL.REQUEST",
        SUCCESS: "PRESCRIPTIONDETAIL.SUCCESS",
        ERROR: "PRESCRIPTIONDETAIL.ERROR"
    },
    ADDMEDICINE: {
        REQUEST: "ADDMEDICINE.REQUEST",
        SUCCESS: "ADDMEDICINE.SUCCESS",
        ERROR: "ADDMEDICINE.ERROR"
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
    UPDATE: {
        REQUEST: "PRESCRIPTION.UPDATE.REQUEST",
        SUCCESS: "PRESCRIPTION.UPDATE.SUCCESS",
        ERROR: "PRESCRIPTION.UPDATE.ERROR"
    }
}

export function getDetail (id)
{
    return {
        type: action_type.PRESCRIPTIONDETAIL.REQUEST,
        id,
    }
}

export function addMedicine (data)
{
    return {
        type: action_type.ADDMEDICINE.REQUEST,
        data,
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

export function update (id, data){
    return {
        type: action_type.UPDATE.REQUEST,
        id,
        data
    }
}