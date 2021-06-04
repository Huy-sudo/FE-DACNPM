export const action_type = {
    MEDICAL: {
        REQUEST: "MEDICAL.REQUEST",
        SUCCESS: "MEDICAL.SUCCESS",
        ERROR: "MEDICAL.ERROR"
    }
}

export function getList (params)
{
    return {
        type: action_type.MEDICAL.REQUEST,
        params,
    }
}