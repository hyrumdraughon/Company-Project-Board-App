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

    axios.defaults.baseURL = 'https://api.juliocorzo.com'
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
            const {profile, email, teamId, role, id, companyId} = res.data
            
            // localStorage.setItem("User", JSON.stringify(user))
            localStorage.setItem("UserId", id)

            if(role.id === 1){
                setUserState(prevState => ({...prevState, isAdmin: true}))
            }

            setUserState(prevState => ({...prevState, userId: id, user: {
                                                            firstName: profile.firstName,
                                                            lastName: profile.lastName,
                                                            phoneNumber: profile.phone,
                                                            email: email,
                                                            teamId: teamId,
                                                            companyId:companyId
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

    const patchUserFields = (newFields) => {
        axios.patch('user/'+userState.userId,newFields).then(res => {
            console.log(res.data)
            setUserState(prevState => ({...prevState, user: {
                firstName: res.data.profile.firstName,
                lastName: res.data.profile.lastName,
                phoneNumber: res.data.profile.phone,
                email: res.data.email,
                teamId: res.data.teamId
                }
}))
        }
            )
            .catch( err => {console.error(err)})
    }

    const patchPassword = (newPassword) => {
        axios.patch('/changePassword',newPassword).then(res=>{
            console.log(res.data)
        })
        .catch(err => {console.error(err)})
    }

    const getUser = (userId) => {
        axios.get(`/user/${userId}`)
        .then (res => {
            return res.data
        })
    }

    const deleteUser = (userId) => {
        axios.delete(`/user/${userId}`)
        .then(res => {
            return res.data
        })
    }

    return (
        <UserContext.Provider value={{
            user: userState.user,
            userId: userState.userId,
            isAdmin: userState.isAdmin,
            login: login,
            signup: signup,
            logout: logout,
            patchUserFields: patchUserFields,
            patchPassword : patchPassword,
            getUser: getUser,
            deleteUser: deleteUser
        }} >
            { props.children }
        </UserContext.Provider>
    )

}

export default UserProvider