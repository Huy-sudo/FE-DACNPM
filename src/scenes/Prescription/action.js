export const action_type = {
    PRESCRIPTION: {
        REQUEST: "PRESCRIPTION.REQUEST",
        SUCCESS: "PRESCRIPTION.SUCCESS",
        ERROR: "PRESCRIPTION.ERROR"
    }
}

export function getList (params)
{
    return {
        type: action_type.PRESCRIPTION.REQUEST,
        params,
    }
}