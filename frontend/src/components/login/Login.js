import styles from './Login.module.css'

import {useState} from 'react'

import { AiOutlineEyeInvisible } from 'react-icons/ai'

export default function Login(){

    const [eye, setEye] = useState(false)

    function viewPassword(){
        setEye(!eye)
    }
    
    return(
        <div className={styles.container}>
            <form method='post' autoComplete='none' className={styles.subContainer}>
                <img src='https://i.imgur.com/83LRmyf.png' alt='Logo SportLife' />
                <input name='email' id='email' type='text' placeholder='Email'/>
                <div>
                    <input name='password' id='password' type={eye ? 'text' : 'password'} placeholder='Senha'/>
                    <AiOutlineEyeInvisible onClick={viewPassword} className={styles.eyeIcon}/>
                </div>
                <button className={styles.enterBtn}>Entrar</button>
            </form>
        </div>
    )
}