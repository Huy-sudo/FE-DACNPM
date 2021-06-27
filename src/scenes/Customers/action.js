export const action_type = {
    CUSTOMER: {
        REQUEST: "CUSTOMER.REQUEST",
        SUCCESS: "CUSTOMER.SUCCESS",
        ERROR: "CUSTOMER.ERROR"
    },
    CREATE: {
        REQUEST: "CUSTOMER.CREATE.REQUEST",
        SUCCESS: "CUSTOMER.CREATE.SUCCESS",
        ERROR: "CUSTOMER.CREATE.ERROR"
    },
    PRESCRIPTION: {
        REQUEST: "PRESCRIPTION.CREATE.REQUEST",
        SUCCESS: "PRESCRIPTION.CREATE.SUCCESS",
        ERROR: "PRESCRIPTION.CREATE.ERROR"
    },
}

export function getList (params)
{
    return {
        type: action_type.CUSTOMER.REQUEST,
        params,
    }
}

export function addCustomer (params)
{
    return {
        type: action_type.CREATE.REQUEST,
        params,
    }
}

export function addPrescription (data)
{
    return {
        type: action_type.PRESCRIPTION.REQUEST,
        data,
    }
}