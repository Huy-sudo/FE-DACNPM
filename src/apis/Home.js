import axios from '../requestV2'

const prefix = '/report';

export const getListPrescription =(params)=> {
    return axios({
        method: 'GET',
        params,
        url: `/prescription`
    })
}

export const getListMedicine =(params)=> {
    return axios({
        method: 'GET',
        params,
        url: `${prefix}/medicine`
    })
}