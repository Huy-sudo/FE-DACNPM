import axios from '../requestV2'

const prefix = '/customer';

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

export const getDetail =(id)=> {
    return axios({
        method: 'GET',
        url: `${prefix}/${id}`
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
        method: 'DELETE',
        url: `${prefix}/${id}`
    })
}