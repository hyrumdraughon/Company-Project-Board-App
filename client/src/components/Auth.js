import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm'

import { UserContext } from '../context/UserProvider'

function Auth() {
    const initState = { username: "", password: ""}

    const { signup, login } = useContext(UserContext)

    const [inputs, setInputs] = useState(initState)
    const [toggle, setToggle] = useState(false)

    const handleChange = e => {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSignup = e => {
        e.preventDefault()
        signup(inputs)
        setInputs(initState)
    }

    const handleLogin = e => {
        e.preventDefault()
        login(inputs)
        setInputs(initState)
    }

    const toggleForms = () => {
        setToggle(prevToggle => !prevToggle)
    }



    return (
        <div>
            
            {!toggle ?
                <>

                    <AuthForm inputs={inputs}  handleChange={handleChange} handleSubmit={handleLogin} btnText="Login" />

                    <button onClick={toggleForms}>Not A Member?</button>

                </>

            :

                <>

                    <AuthForm inputs={inputs} handleChange={handleChange} handleSubmit={handleSignup} btnText="Signup" />

                    <button onClick={toggleForms}>Already A Member?</button>

                </>
                
            
            }

        </div>
    )
}

export default Auth