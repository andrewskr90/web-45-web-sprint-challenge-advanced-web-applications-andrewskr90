import React, { useEffect } from 'react'
import axiosWithAuth from '../helpers/axiosWithAuth'
import { useHistory } from 'react-router-dom' 

const Logout = () => {

    const { push } = useHistory()

    useEffect(() => {
        axiosWithAuth()
            .post('/logout')
            .then(res=> {
                localStorage.removeItem('token')
                push('/login')
            })
            .catch(err=> console.log(err))
    }, [])

    return(
        <div>Logging out...</div>
    )
}

export default Logout