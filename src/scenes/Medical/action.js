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
    CREATEMEDICINE: {
        REQUEST: "CREATEMEDICINE.REQUEST",
        SUCCESS: "CREATEMEDICINE.SUCCESS",
        ERROR: "CREATEMEDICINE.ERROR"
    },
    USES: {
        REQUEST: "USES.GET_LIST.REQUEST",
        SUCCESS: "USES.GET_LIST.SUCCESS",
        ERROR: "USES.GET_LIST.ERROR"
    },
    UNIT: {
        REQUEST: "UNIT.GET_LIST.REQUEST",
        SUCCESS: "UNIT.GET_LIST.SUCCESS",
        ERROR: "UNIT.GET_LIST.ERROR"
    },
    DELETEMEDICINE: {
        REQUEST: "DELETEMEDICINE.REQUEST",
        SUCCESS: "DELETEMEDICINE.SUCCESS",
        ERROR: "DELETEMEDICINE.ERROR"
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

export function createMedicine (data)
{
    return {
        type: action_type.CREATEMEDICINE.REQUEST,
        data,
    }
}

export function getListUses (params){
    return {
        type: action_type.USES.REQUEST,
        params,
    }
}

export function deleteMedicine (id){
    return {
        type: action_type.DELETEMEDICINE.REQUEST,
        id,
    }
}

export function getListUnit (params){
    return {
        type: action_type.UNIT.REQUEST,
        params,
    }
}