import React, { useEffect, useState } from 'react'

import axios from 'axios'

export const UserContext = React.createContext()


function UserProvider(props) {

    const initState = {
        user: {},
        userId: localStorage.getItem("UserId") ||  0, /*If Protected Routes are still accessable with out logging in change 0 to undefined*/
        loggedIn: false
    }

    const [userState, setUserState] = useState(initState)

    const signup = credentials => {
        console.log("Signed Up!")
        localStorage.setItem('UserId', credentials.password)
    }

    const login = credentials => {

        console.log("Logged In!")
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

export default UserProvider