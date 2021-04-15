import React from 'react'
import '../styles/AuthForm.css'


function AuthForm(props) {
    const {handleChange, handleSubmit, inputs: {username, password}, btnText, toggle, toggleText } = props



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={username} onChange={handleChange} placeholder="Username" />
                {/* <label for="username" class="form_label">Username</label> */}
                <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" />
                {/* <label for="username" class="form_label">Password</label> */}
                <button className="loginbutton">{btnText}</button>
                <button className="togglebutton" onClick={toggle}>{toggleText}</button>
            </form>
        </div>
    )
}

export default AuthForm