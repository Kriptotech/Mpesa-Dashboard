import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

import style from './styles.module.css'

export function LoginContainer() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [number, setnumber] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = async event => {
    setMessage('')
    event.preventDefault()
    const values = {
      number: Number(number),
      password
    }
    setLoading(true)
    let res = await axios.post(
      'https://pipocar.dnsabr.com/app/mpesa-dashboard/login.php',
      JSON.stringify(values)
    )
    setLoading(false)
    // console.log(res.config.data)
    // console.log(res.data)

    if (res.data.response) {
      localStorage.setItem('agente_dashboard_id', res.data.user[0].id)
      localStorage.setItem(
        'agente_dashboard_username',
        res.data.user[0].name
      )
      localStorage.setItem(
        'agente_dashboard_email',
        res.data.user[0].email
      )
      localStorage.setItem(
        'agente_dashboard_number',
        res.data.user[0].number
      )
      localStorage.setItem(
        'agente_dashboard_agent_number_number',
        res.data.user[0].agent_number
      )
      localStorage.setItem(
        'agente_dashboard_isadmin',
        res.data.user[0].isadmin
      )
      localStorage.setItem(
        'agente_dashboard_city',
        res.data.user[0].city
      )
      localStorage.setItem(
        'agente_dashboard_agent_code',
        res.data.user[0].agent_code
      )

      navigate('/')
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Usuario ou senha invalida',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  return (
    <>
      <div className={style.login_container}>
        <div
          className={style.login_container_left}
          data-aos="fade-left"
        >
          <form onSubmit={handleSubmit}>
            <h1>SEJA BEM VINDO</h1>
            <p>Faça login na plataforma interna</p>
            <input
              required
              onChange={e => setnumber(e.target.value)}
              type="number"
              placeholder="Seu telefone"
            />
            <input
              required
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder="Sua senha"
            />
            {message && (
              <p style={{ color: 'red' }}>
                <span>{message}</span>
              </p>
            )}
            <button>{isLoading ? 'Aguarde...' : 'LOGIN'}</button>
          </form>
        </div>

        <div
          className={style.login_container_right}
          data-aos="fade-right"
        >
          <h1>
            Se autentique na <span>plataforma</span>
          </h1>
          <p>
            Entre na sua conta e veja os seus dados e verifique o
            dashboard e varias outras funcionalidades
          </p>
          <img src="/sign-in-illustration.svg" alt="" />
        </div>
      </div>
    </>
  )
}
