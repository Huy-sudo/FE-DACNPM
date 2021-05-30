export const action_type = {
    CUSTOMERDETAIL: {
        REQUEST: "CUSTOMERDETAIL.REQUEST",
        SUCCESS: "CUSTOMERDETAIL.SUCCESS",
        ERROR: "CUSTOMERDETAIL.ERROR"
    },
}

export function getDetail (id)
{
    return {
        type: action_type.CUSTOMERDETAIL.REQUEST,
    }
}

// export function addCustomer (params)
// {
//     return {
//         type: action_type.CREATE.REQUEST,
//         params,
//     }
// }