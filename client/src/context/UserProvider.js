import React, { useEffect, useState } from 'react'

import axios from 'axios'

export const UserContext = React.createContext()


function UserProvider(props) {


    const initState = {
        user: {firstName:"John",lastName:"Smith",phone:"978-123-4567",email:"johnsmith@gmail.com", isAdmin:true, companyName:"Cooksys"},
        userId: localStorage.getItem("UserId") ||  0, /*If Protected Routes are still accessable with out logging in change 0 to undefined*/
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