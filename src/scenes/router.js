
import Prescription from "./Prescription";
import Customer from "./Customers";
import PrescriptionDetail from "./PrescriptionDetail"
import CustomerDetail from "./CustomerDetail"
export default [
    {
        path: '/prescription',
        component: Prescription
    },

    {
        path: '/customer',
        component: Customer
    },

    {
        path: '/prescription/:id/detail',
        component: PrescriptionDetail
    },

    {
        path: '/customer/:id/detail',
        component: CustomerDetail
    },
]
