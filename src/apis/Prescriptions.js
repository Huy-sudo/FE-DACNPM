import axios from '../requestV2'

const prefix = '/prescription';

export const getList =(params)=> {
    return axios({
        method: 'GET',
        params,
        url: `${prefix}`
    })
}

export const create =(data)=> {
    return axios({
        method: 'POST',
        data,
        url: `${prefix}`
    })
}

export const createInventory =(data)=> {
    return axios({
        method: 'POST',
        data,
        url: `inventory`
    })
}

export const getDetail =(id)=> {
    return axios({
        method: 'GET',
        url: `${prefix}/${id}`
    })
}

export const addMedicinePD =(data)=> {
    return axios({
        method: 'POST',
        data,
        url: `/prescription-medicine`
    })
}

export const addDetail =(data)=> {
    return axios({
        method: 'POST',
        data,
        url: `/prescription`
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

export const deleteMedicinePD =(id)=> {
    return axios({
        method: 'DELETE',
        url: `prescription-medicine/${id}`
    })
}