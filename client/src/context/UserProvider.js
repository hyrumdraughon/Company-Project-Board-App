import React, { useEffect, useState } from 'react'

import axios from 'axios'

export const UserContext = React.createContext()


function UserProvider(props) {

    const initState = {
        user: {},
        userId: 0,
        loggedIn: false
    }

    const [userState, setUserState] = useState(initState)

    const signup = () => {

    }

    const login = credentials => {
        // axios.("/login", {
        //     email: credentials.email,
        //     password: credentials.password
        // })
        // .then(res => {
            // localStorage.setItem("User", JSON.stringify(user))
            // localStorage.setItem("UserId", userId)
        // })
    }

    const logout = () => {
        localStorage.removeItem("user")
        // localStorage.removeItem("token")
        setUserState({
            user: {}
        })
    }

    return (
        <UserContext.Provider value={{
            user: userState.user,
            login: login,
            signup: signup,
            logout: logout    
        }} >
            { props.children }
        </UserContext.Provider>
    )

}