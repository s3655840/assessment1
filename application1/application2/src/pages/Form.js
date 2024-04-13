import React, { useState } from "react";

const Form = () => {

 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
 
    function onChangeUsername(e) {
        setUsername(e.target.value)
    }
    function onChangePassword(e) {
        setPassword(e.target.value)
    }
 
    function onSubmit(e) {
        e.preventDefault()
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    }
 
    function getData() {
        console.log(localStorage.getItem('username'));
        console.log(localStorage.getItem('password'))
    }
    return (
        <>
            <div>
                <h1>Sign-Up</h1>
 
                <div>
                    <form onSubmit={onSubmit}>
                        <div>
                            <label>Username</label>
                            <input type="text"  />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" />
                        </div>
                        <button type="submit">Submit</button>
                        <button type="button">Get Data</button>
                    </form>
                </div>
            </div>
        </>
    );
};
 
export default Form;