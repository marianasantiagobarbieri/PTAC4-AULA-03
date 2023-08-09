'use client'
import { useState } from "react";
import { handlerAcessUser } from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import './globals.css'

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { push } = useRouter();
  const handlerLogin = (e) => {
    e.preventDefault();
    handlerAcessUser();
    push('/pages/dashboard');
  }


  return (
    <div className='LoginBox'>
      <div className='LoginContainer'>
        <h1>Login</h1>
        <form className='LoginForm' onSubmit={handlerLogin}>
          <input
            className='LoginInput'
            placeholder='E-mail'
            type="email"
            onChange={(e) => { setEmail(e.target.value) }}>
          </input>
          <span className='LoginSpam'></span>

          <input
            className='LoginInput'
            placeholder='Senha'
            type='password'
            onChange={(e) => { setPassword(e.target.value) }}>
          </input>
          <span className='LoginSpam'></span>
          <button className='LoginBotaoCadastrar'>Entrar</button>
        </form>
      </div>
    </div>
  )
}
