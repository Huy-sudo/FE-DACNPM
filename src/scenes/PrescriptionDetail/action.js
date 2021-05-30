export const action_type = {
    PRESCRIPTIONDETAIL: {
        REQUEST: "PRESCRIPTIONDETAIL.REQUEST",
        SUCCESS: "PRESCRIPTIONDETAIL.SUCCESS",
        ERROR: "PRESCRIPTIONDETAIL.ERROR"
    },
    ADDMEDICINE: {
        REQUEST: "ADDMEDICINE.REQUEST",
        SUCCESS: "ADDMEDICINE.SUCCESS",
        ERROR: "ADDMEDICINE.ERROR"
    }
}

export function getDetail (id)
{
    return {
        type: action_type.PRESCRIPTIONDETAIL.REQUEST,
        id,
    }
}

export function addMedicine (data)
{
    return {
        type: action_type.ADDMEDICINE.REQUEST,
        data,
    }
}