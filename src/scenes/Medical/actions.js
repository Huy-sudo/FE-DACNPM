export const action_type = {
    DASHBOARD: {
        REQUEST: "DASHBOARD.REQUEST",
        SUCCESS: "DASHBOARD.SUCCESS",
        ERROR: "DASHBOARD.ERROR"
    }
}

export function getList (params)
{
    return {
        type: action_type.DASHBOARD.REQUEST,
        params,
    }
}