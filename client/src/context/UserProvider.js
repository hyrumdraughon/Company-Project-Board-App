import React, { useEffect, useState } from 'react'

import axios from 'axios'

export const UserContext = React.createContext()


function UserProvider(props) {

    const initState = {
        user: {},
        userId: localStorage.getItem("UserId") ||  0, /*If Protected Routes are still accessable with out logging in change 0 to undefined*/
        loggedIn: false,
        isAdmin: false,
        projects: []
    }

    axios.defaults.baseURL = 'https://cryptic-eyrie-97093.herokuapp.com/http://97.87.163.218:9999'
    // axios.defaults.baseURL = 'localhost:8080'

    const [userState, setUserState] = useState(initState)

    const signup = credentials => {
        console.log("Signed Up!")

        const newUser = {
            credentials: {
                email: credentials.email,
                password: credentials.password
            },
            profile: {
                firstName: credentials.firstName,
                lastName: credentials.lastName,
                phone: credentials.phoneNumber
            },
            companyId: credentials.companyId
        }

        axios.post("/user", newUser)
        .then( res => {
            console.log(res)

            const {profile, role, id} = res.data
            
            // localStorage.setItem("User", JSON.stringify(user))
            localStorage.setItem("UserId", id)

            if(role.id === 1){
                setUserState(prevState => ({...prevState, isAdmin: true}))
            }

            setUserState(prevState => ({...prevState, user: {
                                                            firstName: profile.firstName,
                                                            lastName: profile.lastName,
                                                            phoneNumber: profile.phone
                                                            }
                                                        })
            )

        })
        .catch(err => {
            console.error(err)
        })
    }
    
    const login = credentials => {

        let loginInfo = {
            email: credentials.email,
            password: credentials.password
        }
        
        axios.post("/login", loginInfo)
        .then(res => {

            console.log(res)
            const {profile, role, id} = res.data
            
            // localStorage.setItem("User", JSON.stringify(user))
            localStorage.setItem("UserId", id)

            if(role.id === 1){
                setUserState(prevState => ({...prevState, isAdmin: true}))
            }

            setUserState(prevState => ({...prevState, user: {
                                                            firstName: profile.firstName,
                                                            lastName: profile.lastName,
                                                            phoneNumber: profile.phone
                                                            }
            }))
        })
        .catch(err => {
            console.error(err)
        })
    }

    const logout = () => {
        localStorage.removeItem("UserId")
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
            isAdmin: userState.isAdmin,
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