import styles from '../styles/Home.module.css'
import Head from 'next/head';
import { app } from '../firebaseConfig';
import { useEffect } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup
} from 'firebase/auth'
import { useState } from 'react';
import { useRouter } from 'next/router';
import GoogleButton from 'react-google-button';
export default function Register() {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((response) => {
                console.log(response.user)
                sessionStorage.setItem('Token', response.user.accessToken);
                router.push('/dashboard')
            })
    }

    const signUpWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((response) => {
                sessionStorage.setItem('Token', response.user.accessToken)
                console.log(response.user)
                router.push('/dashboard')
            })
    }

    

    useEffect(() => {
        let token = sessionStorage.getItem('Token')

        if(token){
            router.push('/dashboard')
        }
    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>Register </title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>Register</h1>

                <input
                    placeholder='Email'
                    className={styles.inputBox}
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    type='email'
                />
                <input
                    placeholder='Password'
                    className={styles.inputBox}
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    type='password'
                />

                <button
                    className={styles.button}
                    onClick={signUp}
                >Sign Up</button>
                <hr />
                <button
                    className={styles.googleAlt}
                    onClick={signUpWithGoogle}>
                    <GoogleButton />
                </button>
                <hr />
                
            </main>
        </div>
    )
}