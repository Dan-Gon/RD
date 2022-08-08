import './EmailSignup.css'
import {FormEvent, MouseEventHandler, SetStateAction, useEffect, useState} from "react";
import React from "react";

const EmailSignup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value);
        setSubmitted(false);
    }
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value);
        setSubmitted(false);
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(name === '' || email === ''){
            setError(true);
        }
        else{
            setSubmitted(true);
            setError(false);
        }
    }
    const successMessage = () =>{
        return(
            <div style={{ display: submitted? '': 'none'}}>
                <h1>Welcome {name}! Thanks for sharing the love.</h1>
            </div>
        )
    }
    const errorMessage = () =>{
        return(
            <div style={{display: error? '': 'none'}}>
                <h1>Please try again.</h1>
            </div>
        )
    }

    return(
        <section className={'signup-container'}>
        <div>
            {errorMessage()}
            {successMessage()}
        </div>
            <h1 style={{display: submitted? 'none' : ''}}>Sign Up For our Newsletter</h1>
            <form className={'form-content'} onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" onChange={handleName} value={name}/>

                <label>Email</label>
                <input type="text" onChange={handleEmail} value={email}/>

                <button type={"submit"}>Submit</button>
            </form>
        </section>
    )
}
export default EmailSignup;