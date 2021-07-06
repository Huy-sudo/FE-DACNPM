export const action_type = {
    GETPRESCRIPTION: {
        REQUEST: "GETPRESCRIPTION.REQUEST",
        SUCCESS: "GETPRESCRIPTION.SUCCESS",
        ERROR: "GETPRESCRIPTION.ERROR"
    },
    GETMEDICINE: {
        REQUEST: "GETMEDICINE.REQUEST",
        SUCCESS: "GETMEDICINE.SUCCESS",
        ERROR: "GETMEDICINE.ERROR"
    }
}

export function getListPrescription (params)
{
    return {
        type: action_type.GETPRESCRIPTION.REQUEST,
        params,
    }
}

export function getListMedicine (params)
{
    return {
        type: action_type.GETMEDICINE.REQUEST,
        params,
    }
}