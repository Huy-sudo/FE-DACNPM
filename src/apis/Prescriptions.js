import axios from '../requestV2'

const prefix = '/prescription';

export const getList =(params)=> {
    return axios({
        method: 'GET',
        params,
        url: `${prefix}`
    })
}

export const getDetail =(id)=> {
    return axios({
        method: 'GET',
        url: `${prefix}/${id}`
    })
}

export const addMedicine =(data)=> {
    return axios({
        method: 'POST',
        data,
        url: `/prescription-medicine`
    })
}

// export const getDetailByCode =(booking_code)=> {
//     return axios({
//         method: 'GET',
//         params: {
//             booking_code
//         },
//         url: `${prefix}/detail`
//     })
// }

export const update =(id, data)=> {
    return axios({
        method: 'PUT',
        data,
        url: `${prefix}/${id}`
    })
}

export const destroy =(id)=> {
    return axios({
        method: 'POST',
        url: `${prefix}/${id}/delete`
    })
}