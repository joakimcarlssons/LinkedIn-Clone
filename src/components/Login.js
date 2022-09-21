import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase';
import { login } from '../features/userSlice';

import '../styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                }));
            })
            .catch(error => {
                console.error(error);
                alert(error);
            });
    }

    // JUST FOR DEMO PURPOSES
    const handleRegister = () => {
        if (!email || !password) return alert("Please enter email and password");

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: 'John Doe'
                })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: 'John Doe',
                        photoUrl: ''
                    }));
                })
            })
            .catch(error => {
                console.error(error);
                alert(error);
            });
    }

  return (
    <div className='login'>
        <img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png" alt="logo" className='login__logo' />
        <div className="login__container">
            <form className='login__form'>
                <h1>Log in</h1>
                <p>Keep yourself updated about your business</p>

                <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />

                <p className='login__linkText'>Forgot password?</p>

                <button type='submit' className='login__btn login__loginBtn' onClick={e => handleLogin(e)}>Login</button>
            </form>
            
            <div className="login__dividerWrapper">
                <div className="login__divider">
                    <div className="login__dividerText">or</div>
                </div>
            </div>

            <div className="login__otherAuths">
                <button className='login__btn'>Logga in med Google</button>
                <button className='login__btn'>Logga in med Apple</button>
            </div>
        </div>

        <div className="login__register">
            <p>Not a member?</p>
            <p className='login__linkText' onClick={handleRegister}>Register now</p>
        </div>
    </div>
  )
}

export default Login