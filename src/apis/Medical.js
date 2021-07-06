import axios from '../requestV2'

const prefix = '/medicine';

export const getList =(params)=> {
    return axios({
        method: 'GET',
        params,
        url: `${prefix}`
    })
}


export const getListUnit =(params)=> {
    return axios({
        method: 'GET',
        params,
        url: `/unit`
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
        url: `/inventory`
    })
}

export const createMedicine =(data)=> {
    return axios({
        method: 'POST',
        data,
        url: `/medicine`
    })
}

export const deleteMedicine =(id)=> {
    return axios({
        method: 'DELETE',
        url: `/medicine/${id}`
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

// export const destroy =(id)=> {
//     return axios({
//         method: 'POST',
//         url: `${prefix}/${id}/delete`
//     })
// }