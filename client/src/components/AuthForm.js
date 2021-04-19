import React from 'react'
import '../styles/AuthForm.css'


function AuthForm(props) {
    const {handleChange, handleSubmit, inputs: {email, password, firstName, lastName, phoneNumber, companyId}, btnText, toggle, toggleText } = props

    let isSignup = false

    if(btnText === "Signup") {
        isSignup = true
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" value={email} onChange={handleChange} placeholder="Email" />
                {/* <label for="username" class="form_label">Username</label> */}
                <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" />
                {/* <label for="username" class="form_label">Password</label> */}
                {isSignup ? 
                <>
                    <input type="text" name="firstName" value={firstName} onChange={handleChange} placeholder="First Name" />
                    <input type="text" name="lastName" value={lastName} onChange={handleChange} placeholder="Last Name" />
                    <input type="text" name="phoneNumber" value={phoneNumber} onChange={handleChange} placeholder="Phone Number" />
                </>
                :
                <div></div>

                }
                <button type="submit" className="loginbutton">{btnText}</button>
                <button type="button" className="togglebutton" onClick={toggle}>{toggleText}</button>
            </form>
        </div>
    )
}

export default AuthForm