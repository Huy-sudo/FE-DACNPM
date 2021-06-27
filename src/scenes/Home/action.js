export const action_type = {
    PRESCRIPTION: {
        REQUEST: "PRESCRIPTION.REQUEST",
        SUCCESS: "PRESCRIPTION.SUCCESS",
        ERROR: "PRESCRIPTION.ERROR"
    },
    MEDICINE: {
        REQUEST: "MEDICINE.REQUEST",
        SUCCESS: "MEDICINE.SUCCESS",
        ERROR: "MEDICINE.ERROR"
    }
}

export function getListPrescription (params)
{
    return {
        type: action_type.PRESCRIPTION.REQUEST,
        params,
    }
}

export function getListMedicine (params)
{
    return {
        type: action_type.Medicine.REQUEST,
        params,
    }
}