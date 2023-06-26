import React, { useState, useRef } from 'react'

export default function DemoUseRef(props) {
    let inputUserName = useRef(null);
    let inputPassword = useRef(null);
    let userName = '';
    let [userLogin, setUserLogin] = useState({ userName: '' })
    const handleLogin = () => {
        userName = 'abc'
        setUserLogin({
            userName: userName
        })
    }
    return (
        <div className='container'>
            <h3>Login</h3>
            <div className="form-group">
                <h3>Username</h3>
                <input ref={inputUserName} type="text" name='username' className='form-control' />
            </div>
            <div className="form-group">
                <h3>Password</h3>
                <input ref={inputPassword} type="password" name='password' className='form-control' />
            </div>
            <div className="form-group">
                <button className='btn btn-success' onClick={() => handleLogin()}>Login</button>
            </div>
        </div>
    )
}

