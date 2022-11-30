import {useEffect,useState} from 'react'
import {
    ArrowsDownUp,
    Users,
    Article,
    CurrencyDollar,
} from 'phosphor-react'
import axios from 'axios'

import style from "./styles.module.css";
import { Header } from "../../../../components/header/Index";


export function DashboarContainer() {
    // states 
    const [costumersList, setCostumersList] =  useState([])
    const [agentBalance, setAgentBalance] =  useState('')
    const [companyBalance, setCompanyBalance] =  useState('')
    const [totalagents, settotalagents] =  useState('')
    const [totaladmins, settotaladmins] =  useState('')

    

    // function to get information of the agents
    async function getAgenttsInfo() {
        let res =await  axios.post('https://pipocar.dnsabr.com/app/mpesa-dashboard/list-agent.php')
        setCostumersList(res.data)

        let agent_ballance =await  axios.post('https://pipocar.dnsabr.com/app/mpesa-dashboard/get-agent-balance.php', JSON.stringify({id: Number(localStorage.getItem('agente_dashboard_id'))}))
        setAgentBalance(agent_ballance.data)
        
        let company_ballance =await  axios.post('https://pipocar.dnsabr.com/app/mpesa-dashboard/get-company-balance.php')
        setCompanyBalance(company_ballance.data)


        settotaladmins(res.data[0]?.total_admin)
        settotalagents(res.data[0]?.total_agents)

        console.log(res.data)
        // console.log(agent_ballance.data)
        // console.log(company_ballance.data)
    }

    

    useEffect(()=>{
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

                    <div className={style.dashboard_card}>
                        <div className={style.dashboard_card_row}>
                            <div>
                                <span>AGENTES</span>
                                <span>{totalagents}</span>
                            </div>
                            <small style={{background: '#14B8A6'}}><Users color='#fff' size={25}/></small>
                        </div>
                    </div>
                    
                    {
                        localStorage.getItem('agente_dashboard_isadmin') === 'true' &&
                        <div className={style.dashboard_card}>
                            <div className={style.dashboard_card_row}>
                                <div>
                                    <span>ADMINISTRADORES</span>
                                    <span>{totaladmins}</span>
                                </div>
                                <small style={{background: 'VIOLET'}}><Users color='#fff' size={25}/></small>
                            </div>
                        </div>
                    }
                   
                    {
                        localStorage.getItem('agente_dashboard_isadmin') === 'false' &&
                        <div className={style.dashboard_card}>
                            <div className={style.dashboard_card_row}>
                                <div>
                                    <span>SEU GANHO TOTAL</span>
                                    <span>{agentBalance.balance ? agentBalance.balance : 0}MT</span>
                                </div>
                                <small style={{background: '#5048E5'}}><CurrencyDollar color='#fff' size={25}/></small>
                            </div>
                        </div>
                    }

                    {
                        localStorage.getItem('agente_dashboard_isadmin') === 'true' &&
                        <div className={style.dashboard_card}>
                            <div className={style.dashboard_card_row}>
                                <div>
                                    <span>GANHO TOTAL DA EMPRESA</span>
                                    <span>{companyBalance.wallet ? companyBalance.wallet : 0}MT</span>
                                </div>
                                <small style={{background: '#5048E5'}}><CurrencyDollar color='#fff' size={25}/></small>
                            </div>
                        </div>
                    }
                </div>

                
            </div>
    );
}
