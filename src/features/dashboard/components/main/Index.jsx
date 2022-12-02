import { useEffect, useState } from 'react'
import {
  ArrowsDownUp,
  Users,
  Article,
  CurrencyDollar
} from 'phosphor-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import style from './styles.module.css'
import { Header } from '../../../../components/header/Index'

export function DashboarContainer() {
  // states
  const [costumersList, setCostumersList] = useState([])
  const [agentBalance, setAgentBalance] = useState('')
  const [companyBalance, setCompanyBalance] = useState('')
  const [totalagents, settotalagents] = useState('')
  const [totaladmins, settotaladmins] = useState('')
  const [total_earning, settotal_earning] = useState('')
  const [last_earning, setlast_earning] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [adminlist, setadminlist] = useState([])

  const navigate = useNavigate()

  // function to get information of the agents
  async function getAgenttsInfo() {
    setLoading(true)
    let res = await axios.post(
      'https://pipocar.dnsabr.com/app/mpesa-dashboard/agent-list-request.php',
      JSON.stringify({
        iduser: Number(localStorage.getItem('agente_dashboard_id'))
      })
    )

    let adminlistrequest = await axios.post(
      'https://pipocar.dnsabr.com/app/mpesa-dashboard/list-request.php'
    )

    let listagents = await axios.post(
      'https://pipocar.dnsabr.com/app/mpesa-dashboard/list-agent.php'
    )

    let gains = await axios.post(
      'https://pipocar.dnsabr.com/app/mpesa-dashboard/agent-total-and-last-earnings.php',
      JSON.stringify({
        iduser: Number(localStorage.getItem('agente_dashboard_id'))
      })
    )

    let agent_ballance = await axios.post(
      'https://pipocar.dnsabr.com/app/mpesa-dashboard/get-agent-balance.php',
      JSON.stringify({
        id: Number(localStorage.getItem('agente_dashboard_id'))
      })
    )
    setAgentBalance(agent_ballance.data)

    let company_ballance = await axios.post(
      'https://pipocar.dnsabr.com/app/mpesa-dashboard/get-company-balance.php'
    )
    setLoading(false)
    setCompanyBalance(company_ballance.data)

    setCostumersList(res.data)
    settotaladmins(listagents.data?.total_admin)
    settotalagents(listagents.data?.total_agents)
    settotal_earning(gains.data.total_earning.toFixed(2))
    setlast_earning(gains.data.last_earning.toFixed(2))
    setadminlist(adminlistrequest.data)

    // console.log(gains.data)
    // console.log(adminlistrequest.data)
    // console.log(agent_ballance.data)
    // console.log(listagents.data)
  }

  useEffect(() => {
    getAgenttsInfo()
  }, [])

  return (
    <div className={style.dashboard}>
      <Header />

      <div className={style.dashboard_cards_box}>
        {/* <div className={style.dashboard_card}>
                        <div className={style.dashboard_card_row}>
                            <div>
                                <span>BUDGET</span>
                                <span>$23k</span>
                            </div>
                            <small style={{background: '#D14343'}}><Article color='#fff' size={25}/></small>
                        </div>
                    </div> */}

        {localStorage.getItem('agente_dashboard_isadmin') ===
          'true' && (
          <div className={style.dashboard_card}>
            <div className={style.dashboard_card_row}>
              <div>
                <span>AGENTES</span>
                {isLoading ? (
                  <span>Processando</span>
                ) : (
                  <span>{totalagents ? totalagents : 0}</span>
                )}
              </div>
              <small style={{ background: '#14B8A6' }}>
                <Users color="#fff" size={25} />
              </small>
            </div>
          </div>
        )}

        {localStorage.getItem('agente_dashboard_isadmin') ===
          'true' && (
          <div className={style.dashboard_card}>
            <div className={style.dashboard_card_row}>
              <div>
                <span>ADMINISTRADORES</span>
                {isLoading ? (
                  <span>Processando</span>
                ) : (
                  <span>{totaladmins ? totaladmins : 0}</span>
                )}
              </div>
              <small style={{ background: 'VIOLET' }}>
                <Users color="#fff" size={25} />
              </small>
            </div>
          </div>
        )}

        {localStorage.getItem('agente_dashboard_isadmin') ===
          'false' && (
          <div className={style.dashboard_card}>
            <div className={style.dashboard_card_row}>
              <div>
                <span>SEU GANHO TOTAL</span>
                {isLoading ? (
                  <span>Processando</span>
                ) : (
                  <span>{total_earning ? total_earning : 0}MT</span>
                )}
              </div>
              <small style={{ background: '#5048E5' }}>
                <CurrencyDollar color="#fff" size={25} />
              </small>
            </div>
          </div>
        )}
        {localStorage.getItem('agente_dashboard_isadmin') ===
          'false' && (
          <div className={style.dashboard_card}>
            <div className={style.dashboard_card_row}>
              <div>
                <span>SEU ULTIMO GANHO</span>
                {isLoading ? (
                  <span>Processando</span>
                ) : (
                  <span>{last_earning ? last_earning : 0}MT</span>
                )}
              </div>
              <small style={{ background: 'pink' }}>
                <CurrencyDollar color="#fff" size={25} />
              </small>
            </div>
          </div>
        )}

        {localStorage.getItem('agente_dashboard_isadmin') ===
          'true' && (
          <div className={style.dashboard_card}>
            <div className={style.dashboard_card_row}>
              <div>
                <span>GANHO TOTAL DA EMPRESA</span>
                {isLoading ? (
                  <span>Processando</span>
                ) : (
                  <span>
                    {companyBalance.wallet
                      ? companyBalance.wallet
                      : 0}
                    MT
                  </span>
                )}
              </div>
              <small style={{ background: '#5048E5' }}>
                <CurrencyDollar color="#fff" size={25} />
              </small>
            </div>
          </div>
        )}
      </div>

      {localStorage.getItem('agente_dashboard_isadmin') === 'false' &&
        costumersList.length !== 0 && (
          <div className={style.costumers_list_container}>
            <h3>Seus pedidos de float:</h3>

            <div className={style.dark_item_invisible}>
              <dl className={style.dark_item}>
                <dt>Nome</dt>
              </dl>
              <dl className={style.dark_item}>
                <dt>Estado</dt>
              </dl>
              <dl className={style.dark_item}>
                <dt>Quantia</dt>
              </dl>
              <dl className={style.dark_item}>
                <dt>Carteira</dt>
              </dl>
            </div>

            {costumersList
              .filter(item => {
                if (searchTerm === '') {
                  return (
                    <div key={item.id}>
                      <dl className={style.litgh_item}>
                        <dd>{item.agent_name}</dd>
                      </dl>
                      <dl
                        style={{
                          color: item.isconfirm ? 'green' : 'orange'
                        }}
                        className={style.litgh_item}
                      >
                        <dd>
                          {item.isconfirm ? 'confirmado' : 'pendente'}
                        </dd>
                      </dl>
                      <dl className={style.litgh_item}>
                        <dd>{item.quantity}</dd>
                      </dl>
                      <dl className={style.litgh_item}>
                        <dd>{item.floatype}</dd>
                      </dl>
                    </div>
                  )
                }

                // if there was found any item with the values provided
                else if (
                  item.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return (
                    <div key={item.id}>
                      <dl
                        style={{ cursor: 'pointer' }}
                        className={style.litgh_item}
                      >
                        <dd>{item.agent_name}</dd>
                      </dl>
                      <dl className={style.litgh_item}>
                        <dd
                          style={{
                            color: item.isconfirm
                              ? 'lightgreen'
                              : 'orange'
                          }}
                        >
                          {item.isconfirm ? 'confirmado' : 'pendente'}
                        </dd>
                      </dl>
                      <dl className={style.litgh_item}>
                        <dd>{item.quantity}</dd>
                      </dl>
                      <dl className={style.litgh_item}>
                        <dd>{item.floatype}</dd>
                      </dl>
                    </div>
                  )
                }
              })
              .map(item => {
                return (
                  <div key={item.id}>
                    <dl className={style.litgh_item}>
                      <dd>{item.agent_name}</dd>
                    </dl>
                    <dl className={style.litgh_item}>
                      <dd
                        style={{
                          color: item.isconfirm
                            ? 'lightgreen'
                            : 'orange'
                        }}
                      >
                        {item.isconfirm ? 'confirmado' : 'pendente'}
                      </dd>
                    </dl>
                    <dl className={style.litgh_item}>
                      <dd>{item.quantity}</dd>
                    </dl>
                    <dl className={style.litgh_item}>
                      <dd>{item.floatype}</dd>
                    </dl>
                  </div>
                )
              })}
          </div>
        )}

      {localStorage.getItem('agente_dashboard_isadmin') === 'true' &&
        adminlist.length !== 0 && (
          <div className={style.costumers_list_container}>
            <h3>Pedidos de float:</h3>

            <div className={style.dark_item_invisible}>
              <dl className={style.dark_item}>
                <dt>Nome</dt>
              </dl>
              <dl className={style.dark_item}>
                <dt>Estado</dt>
              </dl>
              <dl className={style.dark_item}>
                <dt>Quantidade</dt>
              </dl>
              <dl className={style.dark_item}>
                <dt>Tipo</dt>
              </dl>
            </div>

            {adminlist
              .filter(item => {
                if (searchTerm === '') {
                  return (
                    <div key={item.id}>
                      <dl
                        className={style.litgh_item}
                        onClick={() =>
                          navigate('/confirm-float-request-item', {
                            state: item
                          })
                        }
                        style={{ cursor: 'pointer' }}
                      >
                        <dd>{item.agent_name}</dd>
                      </dl>
                      <dl
                        style={{
                          color: item.isconfirm ? 'green' : 'orange',
                          cursor: 'pointer'
                        }}
                        className={style.litgh_item}
                        onClick={() =>
                          navigate('/confirm-float-request-item', {
                            state: item
                          })
                        }
                      >
                        <dd>
                          {item.isconfirm ? 'confirmado' : 'pendente'}
                        </dd>
                      </dl>
                      <dl
                        className={style.litgh_item}
                        onClick={() =>
                          navigate('/confirm-float-request-item', {
                            state: item
                          })
                        }
                        style={{ cursor: 'pointer' }}
                      >
                        <dd>{item.quantity}</dd>
                      </dl>
                      <dl
                        className={style.litgh_item}
                        onClick={() =>
                          navigate('/confirm-float-request-item', {
                            state: item
                          })
                        }
                        style={{ cursor: 'pointer' }}
                      >
                        <dd>{item.floatype}</dd>
                      </dl>
                    </div>
                  )
                }

                // if there was found any item with the values provided
                else if (
                  item.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return (
                    <div key={item.id}>
                      <dl
                        className={style.litgh_item}
                        onClick={() =>
                          navigate('/confirm-float-request-item', {
                            state: item
                          })
                        }
                        style={{ cursor: 'pointer' }}
                      >
                        <dd>{item.agent_name}</dd>
                      </dl>
                      <dl
                        className={style.litgh_item}
                        onClick={() =>
                          navigate('/confirm-float-request-item', {
                            state: item
                          })
                        }
                        style={{ cursor: 'pointer' }}
                      >
                        <dd
                          style={{
                            color: item.isconfirm
                              ? 'lightgreen'
                              : 'orange'
                          }}
                        >
                          {item.isconfirm ? 'confirmado' : 'pendente'}
                        </dd>
                      </dl>
                      <dl
                        className={style.litgh_item}
                        onClick={() =>
                          navigate('/confirm-float-request-item', {
                            state: item
                          })
                        }
                        style={{ cursor: 'pointer' }}
                      >
                        <dd>{item.quantity}</dd>
                      </dl>
                      <dl
                        className={style.litgh_item}
                        onClick={() =>
                          navigate('/confirm-float-request-item', {
                            state: item
                          })
                        }
                        style={{ cursor: 'pointer' }}
                      >
                        <dd>{item.floatype}</dd>
                      </dl>
                    </div>
                  )
                }
              })
              .map(item => {
                return (
                  <div key={item.id}>
                    <dl
                      className={style.litgh_item}
                      onClick={() =>
                        navigate('/confirm-float-request-item', {
                          state: item
                        })
                      }
                      style={{ cursor: 'pointer' }}
                    >
                      <dd>{item.agent_name}</dd>
                    </dl>
                    <dl
                      className={style.litgh_item}
                      onClick={() =>
                        navigate('/confirm-float-request-item', {
                          state: item
                        })
                      }
                      style={{ cursor: 'pointer' }}
                    >
                      <dd
                        style={{
                          color: item.isconfirm
                            ? 'lightgreen'
                            : 'orange'
                        }}
                      >
                        {item.isconfirm ? 'confirmado' : 'pendente'}
                      </dd>
                    </dl>
                    <dl
                      className={style.litgh_item}
                      onClick={() =>
                        navigate('/confirm-float-request-item', {
                          state: item
                        })
                      }
                      style={{ cursor: 'pointer' }}
                    >
                      <dd>{item.quantity}</dd>
                    </dl>
                    <dl
                      className={style.litgh_item}
                      onClick={() =>
                        navigate('/confirm-float-request-item', {
                          state: item
                        })
                      }
                      style={{ cursor: 'pointer' }}
                    >
                      <dd>{item.floatype}</dd>
                    </dl>
                  </div>
                )
              })}
          </div>
        )}
    </div>
  )
}
