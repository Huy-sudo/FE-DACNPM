export const action_type = {
    DASHBOARD: {
        REQUEST: "DASHBOARD.REQUEST",
        SUCCESS: "DASHBOARD.SUCCESS",
        ERROR: "DASHBOARD.ERROR"
    },
    UPDATE: {
        REQUEST: "DASHBOARD.UPDATE.REQUEST",
        SUCCESS: "DASHBOARD.UPDATE.SUCCESS",
        ERROR: "DASHBOARD.UPDATE.ERROR"
    }
}

export function getList (params)
{
    return {
        type: action_type.DASHBOARD.REQUEST,
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