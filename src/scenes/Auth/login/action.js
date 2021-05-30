export const action_type = {
    LOGIN: {
        REQUEST: "AUTH.LOGIN.REQUEST",
        SUCCESS: "AUTH.LOGIN.SUCCESS",
        ERROR: "AUTH.LOGIN.ERROR"
    }
}

export function login (params)
{
    return {
        type: action_type.LOGIN.REQUEST,
        params
    }
}