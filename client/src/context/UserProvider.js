import React, { useEffect, useState } from 'react'

import axios from 'axios'

export const UserContext = React.createContext()


function UserProvider(props) {

    const initState = {
        user: {firstName:"John",lastName:"Smith",phone:"978-123-4567",email:"johnsmith@gmail.com"},
        userId: localStorage.getItem("UserId") ||  0, /*If Protected Routes are still accessable with out logging in change 0 to undefined*/
        loggedIn: false
    }

    const [userState, setUserState] = useState(initState)

    const signup = credentials => {
        console.log("Signed Up!")
        localStorage.removeItem("UserId")
        localStorage.setItem('UserId', credentials.password)
        setUserState(prevState => ({...prevState, userId: credentials.password}))
    }
    
    const login = credentials => {
        
        console.log("Logged In!")
        localStorage.removeItem("UserId")
        localStorage.setItem('UserId', credentials.password)
        setUserState(prevState => ({...prevState, userId: credentials.password}))
        
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
            userId: userState.userId,
            login: login,
            signup: signup,
            logout: logout    
        }} >
            { props.children }
        </UserContext.Provider>
    )

}

export default UserProvider