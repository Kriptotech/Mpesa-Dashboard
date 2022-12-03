import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  List,
  User,
  Users,
  XCircle,
  House,
  UserPlus,
  ChartBar,
  CurrencyDollar
} from 'phosphor-react'

import style from './styles.module.css'
import { appContext } from '../../context/Index'

export function Sidebar() {
  // context
  const { asideVisible, setasideVisible } = useContext(appContext)

  //navigation
  const navigate = useNavigate()

  //states
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [dashboardCurrent, setdashboardCurrent] = useState(false)
  const [agentsCurrent, setAgentsCurrent] = useState(false)
  const [accountCurrent, setAccountCurrent] = useState(false)
  const [addAgentCurrent, setAddAgentCurrent] = useState(false)
  const [daylyAmountCurrnt, setDaylyAmountCurrent] = useState(false)
  const [weeklyRelatoryCurrent, setweeklyRelatoryCurrent] =
    useState(false)
  const [
    confirmweeklyRelatoryCurrent,
    setconfirmweeklyRelatoryCurrent
  ] = useState(false)
  const [askfloatCurrent, setaskfloatCurrent] = useState(false)
  const [confirmfloatrequestCurrent, setaconfirmfloatrequestCurrent] =
    useState(false)
  const [myrelatoriesCurrent, setamyrelatoriesCurrent] =
    useState(false)
  const [agentsrelatoriesCurrent, setagentsrelatoriesCurrent] =
    useState(false)

  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem('agente_dashboard_isadmin') === 'true'
      ? true
      : false
  )

  const changeCurrentRoute = route => {
    localStorage.setItem('currentRoute', route)

    // changing current routes
    if (route === 'agents-relatories') {
      setdashboardCurrent(false)
      setAgentsCurrent(false)
      setAccountCurrent(false)
      setAddAgentCurrent(false)
      setweeklyRelatoryCurrent(false)
      setconfirmweeklyRelatoryCurrent(false)
      setDaylyAmountCurrent(false)
      setaskfloatCurrent(false)
      setaconfirmfloatrequestCurrent(false)
      setamyrelatoriesCurrent(false)
      setagentsrelatoriesCurrent(true)
      navigate('/agents-relatories')
    }
    if (route === 'confirm-float-request') {
      setdashboardCurrent(false)
      setAgentsCurrent(false)
      setAccountCurrent(false)
      setAddAgentCurrent(false)
      setweeklyRelatoryCurrent(false)
      setconfirmweeklyRelatoryCurrent(false)
      setDaylyAmountCurrent(false)
      setaskfloatCurrent(false)
      setamyrelatoriesCurrent(false)
      setagentsrelatoriesCurrent(false)
      setaconfirmfloatrequestCurrent(true)
      navigate('/confirm-float-request')
    }
    if (route === 'my-relatories') {
      setdashboardCurrent(false)
      setAgentsCurrent(false)
      setAccountCurrent(false)
      setAddAgentCurrent(false)
      setweeklyRelatoryCurrent(false)
      setconfirmweeklyRelatoryCurrent(false)
      setDaylyAmountCurrent(false)
      setaskfloatCurrent(false)
      setaconfirmfloatrequestCurrent(false)
      setagentsrelatoriesCurrent(false)
      setamyrelatoriesCurrent(true)
      navigate('/my-relatories')
    }
    if (route === 'ask-float') {
      setdashboardCurrent(false)
      setAgentsCurrent(false)
      setAccountCurrent(false)
      setAddAgentCurrent(false)
      setweeklyRelatoryCurrent(false)
      setconfirmweeklyRelatoryCurrent(false)
      setDaylyAmountCurrent(false)
      setaconfirmfloatrequestCurrent(false)
      setamyrelatoriesCurrent(false)
      setagentsrelatoriesCurrent(false)
      setaskfloatCurrent(true)
      navigate('/ask-float')
    }
    if (route === 'dashboard') {
      setAgentsCurrent(false)
      setAccountCurrent(false)
      setAddAgentCurrent(false)
      setweeklyRelatoryCurrent(false)
      setconfirmweeklyRelatoryCurrent(false)
      setaskfloatCurrent(false)
      setaconfirmfloatrequestCurrent(false)
      setamyrelatoriesCurrent(false)
      setagentsrelatoriesCurrent(false)
      setdashboardCurrent(true)
      navigate('/')
    }
    if (route === 'confirm-weekly-relatory') {
      setAgentsCurrent(false)
      setAccountCurrent(false)
      setAddAgentCurrent(false)
      setdashboardCurrent(false)
      setweeklyRelatoryCurrent(false)
      setaskfloatCurrent(false)
      setaconfirmfloatrequestCurrent(false)
      setamyrelatoriesCurrent(false)
      setagentsrelatoriesCurrent(false)
      setconfirmweeklyRelatoryCurrent(true)
      navigate('/confirm-weekly-relatory')
    }
    if (route === 'weekly-relatory') {
      setAgentsCurrent(false)
      setAccountCurrent(false)
      setAddAgentCurrent(false)
      setdashboardCurrent(false)
      setaskfloatCurrent(false)
      setaconfirmfloatrequestCurrent(false)
      setamyrelatoriesCurrent(false)
      setagentsrelatoriesCurrent(false)
      setweeklyRelatoryCurrent(true)
      navigate('/weekly-relatory')
    }
    if (route === 'customers') {
      setAccountCurrent(false)
      setAddAgentCurrent(false)
      setdashboardCurrent(false)
      setweeklyRelatoryCurrent(false)
      setconfirmweeklyRelatoryCurrent(false)
      setaskfloatCurrent(false)
      setaconfirmfloatrequestCurrent(false)
      setamyrelatoriesCurrent(false)
      setagentsrelatoriesCurrent(false)
      setAgentsCurrent(true)
      navigate('/customers')
    }
    if (route === 'account') {
      setAddAgentCurrent(false)
      setdashboardCurrent(false)
      setAgentsCurrent(false)
      setweeklyRelatoryCurrent(false)
      setconfirmweeklyRelatoryCurrent(false)
      setaskfloatCurrent(false)
      setaconfirmfloatrequestCurrent(false)
      setamyrelatoriesCurrent(false)
      setagentsrelatoriesCurrent(false)
      setAccountCurrent(true)
      navigate('/account')
    }
    if (route === 'add_customers') {
      setdashboardCurrent(false)
      setAgentsCurrent(false)
      setAccountCurrent(false)
      setweeklyRelatoryCurrent(false)
      setconfirmweeklyRelatoryCurrent(false)
      setaskfloatCurrent(false)
      setaconfirmfloatrequestCurrent(false)
      setamyrelatoriesCurrent(false)
      setagentsrelatoriesCurrent(false)
      setAddAgentCurrent(true)
      navigate('/add-agent')
    }
    if (route === 'dayly_amount') {
      setdashboardCurrent(false)
      setAgentsCurrent(false)
      setAccountCurrent(false)
      setAddAgentCurrent(false)
      setweeklyRelatoryCurrent(false)
      setconfirmweeklyRelatoryCurrent(false)
      setaskfloatCurrent(false)
      setaconfirmfloatrequestCurrent(false)
      setamyrelatoriesCurrent(false)
      setagentsrelatoriesCurrent(false)
      setDaylyAmountCurrent(true)
      navigate('/dayly-amount')
    }
  }

  useEffect(() => {
    // getting current route in localstorage
    if (localStorage.getItem('currentRoute') === 'dashboard') {
      setdashboardCurrent(true)
    }
    if (localStorage.getItem('currentRoute') === 'customers') {
      setAgentsCurrent(true)
    }
    if (localStorage.getItem('currentRoute') === 'account') {
      setAccountCurrent(true)
    }
    if (localStorage.getItem('currentRoute') === 'add_customers') {
      setAddAgentCurrent(true)
    }
    if (localStorage.getItem('currentRoute') === 'dayly_amount') {
      setDaylyAmountCurrent(true)
    }
    if (localStorage.getItem('currentRoute') === 'weekly-relatory') {
      setweeklyRelatoryCurrent(true)
    }
    if (
      localStorage.getItem('currentRoute') ===
      'confirm-weekly-relatory'
    ) {
      setconfirmweeklyRelatoryCurrent(true)
    }
    if (localStorage.getItem('currentRoute') === 'ask-float') {
      setaskfloatCurrent(true)
    }
    if (
      localStorage.getItem('currentRoute') === 'confirm-float-request'
    ) {
      setaconfirmfloatrequestCurrent(true)
    }
    if (localStorage.getItem('currentRoute') === 'my-relatories') {
      setamyrelatoriesCurrent(true)
    }
    if (
      localStorage.getItem('currentRoute') === 'agents-relatories'
    ) {
      setagentsrelatoriesCurrent(true)
    }

    // if there is no current route in local storage
    if (!localStorage.getItem('currentRoute')) {
      localStorage.setItem('currentRoute', 'dashboard')
      setdashboardCurrent(true)
    }
  }, [])

  return (
    <>
      <header className={style.main_header}>
        <div className={style.sidebar}>
          <div className={style.sidebar_first_div_box}>
            <div>
              <span>
                {localStorage.getItem('agente_dashboard_username')}
              </span>
              <span>Logado como: {isAdmin ? 'admin' : 'agente'}</span>
            </div>
          </div>
          {/*                 
                <div  className={style.sidebar_second_div_box}>
                    <div onClick={()=>changeCurrentRoute('dashboard')} style={{background: dashboardCurrent ? '#242A38' : 'none'}}>
                        <ChartBar color={dashboardCurrent ? '#10B981' : '#9CA3AF'} size={20}/>
                        <span style={{color: dashboardCurrent ? '#10B981' : '#9CA3AF'}}>Dashboard</span>
                    </div>

                    {
                        isAdmin  &&
                        <div onClick={()=>changeCurrentRoute('customers')} style={{background: agentsCurrent ? '#242A38' : 'none'}}>
                            <Users color={agentsCurrent ? '#10B981' : '#9CA3AF'} size={20}/>
                            <span style={{color: agentsCurrent ? '#10B981' : '#9CA3AF'}}>Agentes</span>
                        </div>
                    }
                    
                    <div onClick={()=>changeCurrentRoute('account')} style={{background: accountCurrent ? '#242A38' : 'none'}}>
                        <User color={accountCurrent ? '#10B981' : '#9CA3AF'} size={20}/>
                        <span style={{color: accountCurrent ? '#10B981' : '#9CA3AF'}}>Conta</span>
                    </div>

                    {
                        isAdmin  &&
                        <div onClick={()=>changeCurrentRoute('add_customers')} style={{background: addAgentCurrent ? '#242A38' : 'none'}}>
                            <UserPlus color={addAgentCurrent ? '#10B981' : '#9CA3AF'} size={20}/>
                            <span style={{color: addAgentCurrent ? '#10B981' : '#9CA3AF'}}>Adicionar agente</span>
                        </div>
                    }
                    {
                        !isAdmin &&
                        <div onClick={()=>changeCurrentRoute('dayly_amount')} style={{background: daylyAmountCurrnt ? '#242A38' : 'none'}}>
                            <CurrencyDollar color={daylyAmountCurrnt ? '#10B981' : '#9CA3AF'} size={20}/>
                            <span style={{color: daylyAmountCurrnt ? '#10B981' : '#9CA3AF'}}>Relatar ganhos</span>
                        </div>
                    }
                    {
                        isAdmin &&
                        <div onClick={()=>changeCurrentRoute('weekly-relatory')} style={{background: weeklyRelatoryCurrent ? '#242A38' : 'none'}}>
                            <CurrencyDollar color={weeklyRelatoryCurrent ? '#10B981' : '#9CA3AF'} size={20}/>
                            <span style={{color: weeklyRelatoryCurrent ? '#10B981' : '#9CA3AF'}}>Relatorios semanais</span>
                        </div>
                    }
                    {
                        isAdmin &&
                        <div onClick={()=>changeCurrentRoute('confirm-weekly-relatory')} style={{background: confirmweeklyRelatoryCurrent ? '#242A38' : 'none'}}>
                            <CurrencyDollar color={confirmweeklyRelatoryCurrent ? '#10B981' : '#9CA3AF'} size={20}/>
                            <span style={{color: confirmweeklyRelatoryCurrent ? '#10B981' : '#9CA3AF'}}>Confirmar relatorios semanais</span>
                        </div>
                    }
                    {
                        isAdmin &&
                        <div onClick={()=>changeCurrentRoute('confirm-float-request')} style={{background: confirmfloatrequestCurrent ? '#242A38' : 'none'}}>
                            <CurrencyDollar color={confirmfloatrequestCurrent ? '#10B981' : '#9CA3AF'} size={20}/>
                            <span style={{color: confirmfloatrequestCurrent ? '#10B981' : '#9CA3AF'}}>Confirmar pedido de float</span>
                        </div>
                    }
                    {
                        !isAdmin &&
                        <div onClick={()=>changeCurrentRoute('ask-float')} style={{background: askfloatCurrent ? '#242A38' : 'none'}}>
                            <CurrencyDollar color={askfloatCurrent ? '#10B981' : '#9CA3AF'} size={20}/>
                            <span style={{color: askfloatCurrent ? '#10B981' : '#9CA3AF'}}>Requisitar float</span>
                        </div>
                    }
                    {
                        !isAdmin &&
                        <div onClick={()=>changeCurrentRoute('my-relatories')} style={{background: myrelatoriesCurrent ? '#242A38' : 'none'}}>
                            <CurrencyDollar color={myrelatoriesCurrent ? '#10B981' : '#9CA3AF'} size={20}/>
                            <span style={{color: myrelatoriesCurrent ? '#10B981' : '#9CA3AF'}}>Meus relatorios</span>
                        </div>
                    }
                    {
                        isAdmin &&
                        <div onClick={()=>changeCurrentRoute('agents-relatories')} style={{background: agentsrelatoriesCurrent ? '#242A38' : 'none'}}>
                            <CurrencyDollar color={agentsrelatoriesCurrent ? '#10B981' : '#9CA3AF'} size={20}/>
                            <span style={{color: agentsrelatoriesCurrent ? '#10B981' : '#9CA3AF'}}>Relatorios dos agentes</span>
                        </div>
                    }
                </div> */}
        </div>
      </header>

      {/*Mobile version */}
      <header className={style.main_header_mobile}>
        <div
          className={
            asideVisible
              ? style.sidebar_mobile_visible
              : style.sidebar_mobile
          }
        >
          <div className={style.sidebar_first_div_box}>
            <button onClick={() => setasideVisible(false)}>
              <XCircle color="rgba(157, 109, 235, 1)" size={28} />
            </button>

            <div
              onClick={() => changeCurrentRoute('dashboard')}
              style={{
                background: dashboardCurrent ? '#242A38' : 'none'
              }}
            >
              <ChartBar
                color={dashboardCurrent ? '#10B981' : '#9CA3AF'}
                size={20}
              />
              <span
                style={{
                  color: dashboardCurrent ? '#10B981' : '#9CA3AF'
                }}
              >
                Dashboard
              </span>
            </div>

            {isAdmin && (
              <div
                onClick={() => changeCurrentRoute('customers')}
                style={{
                  background: agentsCurrent ? '#242A38' : 'none'
                }}
              >
                <Users
                  color={agentsCurrent ? '#10B981' : '#9CA3AF'}
                  size={20}
                />
                <span
                  style={{
                    color: agentsCurrent ? '#10B981' : '#9CA3AF'
                  }}
                >
                  Agentes
                </span>
              </div>
            )}

            <div
              onClick={() => changeCurrentRoute('account')}
              style={{
                background: accountCurrent ? '#242A38' : 'none'
              }}
            >
              <User
                color={accountCurrent ? '#10B981' : '#9CA3AF'}
                size={20}
              />
              <span
                style={{
                  color: accountCurrent ? '#10B981' : '#9CA3AF'
                }}
              >
                Conta
              </span>
            </div>

            {isAdmin && (
              <div
                onClick={() => changeCurrentRoute('add_customers')}
                style={{
                  background: addAgentCurrent ? '#242A38' : 'none'
                }}
              >
                <UserPlus
                  color={addAgentCurrent ? '#10B981' : '#9CA3AF'}
                  size={20}
                />
                <span
                  style={{
                    color: addAgentCurrent ? '#10B981' : '#9CA3AF'
                  }}
                >
                  Adicionar agente
                </span>
              </div>
            )}
            {!isAdmin && (
              <div
                onClick={() => changeCurrentRoute('dayly_amount')}
                style={{
                  background: daylyAmountCurrnt ? '#242A38' : 'none'
                }}
              >
                <CurrencyDollar
                  color={daylyAmountCurrnt ? '#10B981' : '#9CA3AF'}
                  size={20}
                />
                <span
                  style={{
                    color: daylyAmountCurrnt ? '#10B981' : '#9CA3AF'
                  }}
                >
                  Relatar ganhos
                </span>
              </div>
            )}
            {isAdmin && (
              <div
                onClick={() => changeCurrentRoute('weekly-relatory')}
                style={{
                  background: weeklyRelatoryCurrent
                    ? '#242A38'
                    : 'none'
                }}
              >
                <CurrencyDollar
                  color={
                    weeklyRelatoryCurrent ? '#10B981' : '#9CA3AF'
                  }
                  size={20}
                />
                <span
                  style={{
                    color: weeklyRelatoryCurrent
                      ? '#10B981'
                      : '#9CA3AF'
                  }}
                >
                  Relatorios semanais
                </span>
              </div>
            )}
            {isAdmin && (
              <div
                onClick={() =>
                  changeCurrentRoute('confirm-weekly-relatory')
                }
                style={{
                  background: confirmweeklyRelatoryCurrent
                    ? '#242A38'
                    : 'none'
                }}
              >
                <CurrencyDollar
                  color={
                    confirmweeklyRelatoryCurrent
                      ? '#10B981'
                      : '#9CA3AF'
                  }
                  size={20}
                />
                <span
                  style={{
                    color: confirmweeklyRelatoryCurrent
                      ? '#10B981'
                      : '#9CA3AF'
                  }}
                >
                  Confirmar relatorios semanais
                </span>
              </div>
            )}
            {isAdmin && (
              <div
                onClick={() =>
                  changeCurrentRoute('confirm-float-request')
                }
                style={{
                  background: confirmfloatrequestCurrent
                    ? '#242A38'
                    : 'none'
                }}
              >
                <CurrencyDollar
                  color={
                    confirmfloatrequestCurrent ? '#10B981' : '#9CA3AF'
                  }
                  size={20}
                />
                <span
                  style={{
                    color: confirmfloatrequestCurrent
                      ? '#10B981'
                      : '#9CA3AF'
                  }}
                >
                  Confirmar pedido de float
                </span>
              </div>
            )}
            {!isAdmin && (
              <div
                onClick={() => changeCurrentRoute('ask-float')}
                style={{
                  background: askfloatCurrent ? '#242A38' : 'none'
                }}
              >
                <CurrencyDollar
                  color={askfloatCurrent ? '#10B981' : '#9CA3AF'}
                  size={20}
                />
                <span
                  style={{
                    color: askfloatCurrent ? '#10B981' : '#9CA3AF'
                  }}
                >
                  Requisitar float
                </span>
              </div>
            )}
            {!isAdmin && (
              <div
                onClick={() => changeCurrentRoute('my-relatories')}
                style={{
                  background: myrelatoriesCurrent ? '#242A38' : 'none'
                }}
              >
                <CurrencyDollar
                  color={myrelatoriesCurrent ? '#10B981' : '#9CA3AF'}
                  size={20}
                />
                <span
                  style={{
                    color: myrelatoriesCurrent ? '#10B981' : '#9CA3AF'
                  }}
                >
                  Meus relatorios
                </span>
              </div>
            )}
            {isAdmin && (
              <div
                onClick={() =>
                  changeCurrentRoute('agents-relatories')
                }
                style={{
                  background: agentsrelatoriesCurrent
                    ? '#242A38'
                    : 'none'
                }}
              >
                <CurrencyDollar
                  color={
                    agentsrelatoriesCurrent ? '#10B981' : '#9CA3AF'
                  }
                  size={20}
                />
                <span
                  style={{
                    color: agentsrelatoriesCurrent
                      ? '#10B981'
                      : '#9CA3AF'
                  }}
                >
                  Relatorios dos agentes
                </span>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  )
}
