import { useState } from 'react'
import axios from 'axios'

import style from './styles.module.css'
import { Header } from '../../../../components/header/Index'
import { PulseLoader } from 'react-spinners'
export function AcountContainer() {
  const [number, setnumber] = useState('')
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setLoading] = useState(false)

  async function submitForm(e) {
    e.preventDefault()
    setMessage('')

    const values = {
      number: number
        ? Number(number)
        : Number(localStorage.getItem('agente_dashboard_number')),
      name: username
        ? username
        : localStorage.getItem('agente_dashboard_username'),
      email: email
        ? email
        : localStorage.getItem('agente_dashboard_email'),
      id: Number(localStorage.getItem('agente_dashboard_id'))
    }

    if (username || email || number) {
      setLoading(true)
      let res = await axios.post(
        'https://pipocar.dnsabr.com/app/mpesa-dashboard/update-agent.php',
        JSON.stringify(values)
      )
      setLoading(false)
      console.log(res.config.data)
      console.log(res.data)

      if (res.data.response) {
        setMessage('atualizado')

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
      } else {
        setMessage('Falha ao atualizar')
      }

      if (res.data.response_text === 'Numero ocupado') {
        setMessage('atualizado')
      }
      if (
        username ===
          localStorage.getItem('agente_dashboard_username') &&
        number === localStorage.getItem('agente_dashboard_number') &&
        email === localStorage.getItem('agente_dashboard_email')
      ) {
        setMessage('nenhuma alteração feita')
      }
    } else setMessage('nenhuma alteração feita')
  }

  return (
    <div className={style.profile}>
      <Header />

      <div className={style.profile_header}>
        <h1>Minha conta</h1>
      </div>

      <div className={style.profile_row_container}>
        <div className={style.profile_card}>
          <div className={style.profile_card_box}>
            <img src="profile.png" alt="" width="50px" />
            <span>
              {localStorage.getItem('agente_dashboard_username')}
            </span>
            <p>{localStorage.getItem('agente_dashboard_email')}</p>
            <div></div>
          </div>
        </div>

        <form onSubmit={e => submitForm(e)}>
          <h4>perfil</h4>
          <p>A informação pode ser editada</p>

          <div>
            <input
              placeholder={
                localStorage.getItem('agente_dashboard_username')
                  ? localStorage.getItem('agente_dashboard_username')
                  : 'Nome'
              }
              type="text"
              onChange={e => setusername(e.target.value)}
            />

            <input
              placeholder={
                localStorage.getItem('agente_dashboard_email')
                  ? localStorage.getItem('agente_dashboard_email')
                  : 'E-mail'
              }
              type="email"
              onChange={e => setemail(e.target.value)}
            />

            <input
              placeholder={
                localStorage.getItem('agente_dashboard_number')
                  ? localStorage.getItem('agente_dashboard_number')
                  : 'Numero de telefone'
              }
              type="number"
              onChange={e => setnumber(e.target.value)}
            />
          </div>

          <br />
          <p style={{ color: 'violet' }}>{message}</p>
          <button disabled={isLoading}>
            {isLoading ? (
              <PulseLoader color="green" />
            ) : (
              'SALVAR DETALHES'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
