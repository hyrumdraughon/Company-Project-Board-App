import React, { useEffect, useState } from 'react'

import axios from 'axios'

export const UserContext = React.createContext()


function UserProvider(props) {


    const initState = {
        user: {firstName: '', lastName: '', phoneNumber: '', email: ''},
        userId: localStorage.getItem("UserId") ||  0,
        loggedIn: false,
        isAdmin: false,
        projects: []
    }

    axios.defaults.baseURL = 'http://97.87.163.218:9999'
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
            // console.log(res)

            const {profile, email, role, id} = res.data
            
            // localStorage.setItem("User", JSON.stringify(user))
            localStorage.setItem("UserId", id)

            if(role.id === 1){
                setUserState(prevState => ({...prevState, isAdmin: true}))
            }

            setUserState(prevState => ({...prevState, user: {
                                                            firstName: profile.firstName,
                                                            lastName: profile.lastName,
                                                            phoneNumber: profile.phone,
                                                            email: email
                                                            }
                                                        })
            )

            console.log(userState.user.firstName)

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

            console.log(res.data)
            const {profile, email, role, id} = res.data
            
            // localStorage.setItem("User", JSON.stringify(user))
            localStorage.setItem("UserId", id)

            if(role.id === 1){
                setUserState(prevState => ({...prevState, isAdmin: true}))
            }

            setUserState(prevState => ({...prevState, userId: id, user: {
                                                            firstName: profile.firstName,
                                                            lastName: profile.lastName,
                                                            phoneNumber: profile.phone,
                                                            email: email
                                                            }
            }))

            console.log(userState.user)
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



    return (
        <UserContext.Provider value={{
            user: userState.user,
            userId: userState.userId,
            isAdmin: userState.isAdmin,
            login: login,
            signup: signup,
            logout: logout
        }} >
            { props.children }
        </UserContext.Provider>
    )

}

export default UserProvider