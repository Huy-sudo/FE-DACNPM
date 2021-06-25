export const action_type = {
    MEDICAL: {
        REQUEST: "MEDICAL.REQUEST",
        SUCCESS: "MEDICAL.SUCCESS",
        ERROR: "MEDICAL.ERROR"
    },
    UPDATE: {
        REQUEST: "MEDICAL.UPDATE.REQUEST",
        SUCCESS: "MEDICAL.UPDATE.SUCCESS",
        ERROR: "MEDICAL.UPDATE.ERROR"
    },
    ADDMEDICINE: {
        REQUEST: "ADDMEDICINE.REQUEST",
        SUCCESS: "ADDMEDICINE.SUCCESS",
        ERROR: "ADDMEDICINE.ERROR"
    },
}

export function getList (params)
{
    return {
        type: action_type.MEDICAL.REQUEST,
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

export function addMedicine (data)
{
    return {
        type: action_type.ADDMEDICINE.REQUEST,
        data,
    }
}