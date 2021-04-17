import React, { useEffect, useState } from 'react'

import axios from 'axios'

export const UserContext = React.createContext()


function UserProvider(props) {

    const proj = {
        label: 'Hello',
        descriptionTextLabel: 'hiehe'
    }
    const proj2 = {
        label: 'Goodbye',
        descriptionTextLabel: 'Oh No Mr Bill'
    }
    const proj3 = {
        label: 'Hello',
        descriptionTextLabel: 'hiehe'
    }
    const proj24 = {
        label: 'Goodbye',
        descriptionTextLabel: 'Oh No Mr Bill'
    }
    const proj5 = {
        label: 'Hello',
        descriptionTextLabel: 'hiehe'
    }
    const proj25 = {
        label: 'Goodbye',
        descriptionTextLabel: 'Oh No Mr Bill'
    }

    const initState = {
        user: {firstName:"John",lastName:"Smith",phone:"978-123-4567",email:"johnsmith@gmail.com", isAdmin:true, companyName:"Cooksys"},
        userId: localStorage.getItem("UserId") ||  0, /*If Protected Routes are still accessable with out logging in change 0 to undefined*/
        loggedIn: false,
        projects: [proj, proj2, proj3, proj24, proj5, proj25]
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

    const getProjects = user => {

        setUserState(prevState => ({...prevState, projects: [
        {
            id: 1,
            title: "test1",
            description: "this is a test",
            completed: false
        },
        {
            id: 2,
            title: "test2",
            description: "this is a test",
            completed: false
        },
        {
            id: 3,
            title: "test3",
            description: "this is a test",
            completed: false
        },
        {
            id: 4,
            title: "test4",
            description: "this is a test",
            completed: false
        }]
        })
        )

    }

    return (
        <UserContext.Provider value={{
            user: userState.user,
            userId: userState.userId,
            projects: userState.projects,
            login: login,
            signup: signup,
            logout: logout,
            getProjects: getProjects
        }} >
            { props.children }
        </UserContext.Provider>
    )

}

export default UserProvider