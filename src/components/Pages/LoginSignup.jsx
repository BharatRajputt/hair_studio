import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './LoginSignup.css';

const LoginSignup = () => {
    const [signState, setSignState] = useState("Sign In");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        contact: "",
        email: "",
        gender: ""
    });

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const login = async () => {
        console.log("login function executed", formData);
        let responseData;
    await fetch('http://localhost:8000/login',{
        method:'POST',
        headers:{
            Accept:'application/form-data',
            'Content-Type':'application/json',

        },
        body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if (responseData.success) {
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
    }
    else{
        alert(responseData.errors)
    }
    };

    
    const signUp = async () => {
        console.log("Signup function executed", formData);
        let responseData;
    await fetch('http://localhost:8000/register',{
        method:'POST',
        headers:{
            Accept:'application/form-data',
            'Content-Type':'application/json',

        },
        body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if (responseData.success) {
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
    }
    else{
        alert(responseData.errors)
    }
    };

    return (
        <div>
            <section id="banner-signup">
                <img src={logo} className="logo" alt="Logo" />
                <div className="signup-box">
                    <h1 className="sign-h1">{signState}</h1>
                    <form>
                        {signState === "Sign Up" && (
                            <>
                                <input type="text" name="firstName" value={formData.firstName} onChange={changeHandler} placeholder="First Name" />
                                <input type="text" name="lastName" value={formData.lastName} onChange={changeHandler} placeholder="Last Name" />
                                <input type="contact" name="contact" value={formData.contact} onChange={changeHandler} placeholder="Contact" />
                                <select className="select-signup" name="gender" value={formData.gender} onChange={changeHandler}>
                                    <option value="Please Select One">Please Select One</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </>
                        )}

                        <input type="email" name="email" value={formData.email} onChange={changeHandler} placeholder="E-mail Id" />
                        <input type="password" name="password" value={formData.password} onChange={changeHandler} placeholder="Password" />
                        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={changeHandler} placeholder="Confirm Password" />
                        <input type="button" onClick={() => signState === "Sign In" ? login() : signUp()} value={signState} />
                    </form>
                    {signState === "Sign In" ?
        <p>New to HairStudio? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span></p> :
        <p>Already have an account?<span onClick={() => setSignState("Sign In")}>Sign In Now</span></p>
    }
                </div>
            </section>
        </div>
    );
};

export default LoginSignup
