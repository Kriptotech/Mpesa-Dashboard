import {useEffect,useState} from 'react'
import {
    ArrowsDownUp,
    Users,
    Article,
    CurrencyDollar,
} from 'phosphor-react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import style from "./styles.module.css";
import { Header } from "../../../../components/header/Index";


export function Main() {
    // states 
    const [costumersList, setCostumersList] =  useState([])
    const [agentBalance, setAgentBalance] =  useState('')
    const [companyBalance, setCompanyBalance] =  useState('')
    const [totalagents, settotalagents] =  useState('')
    const [totaladmins, settotaladmins] =  useState('')
    const [total_earning, settotal_earning] =  useState('')
    const [last_earning, setlast_earning] =  useState('')
    const [searchTerm, setSearchTerm] =  useState('')
    const [adminlist, setadminlist] =  useState([])

    const navigate =  useNavigate()

    

    // function to get information of the agents
    async function fetchData() {
        let res =await  axios.post('https://pipocar.dnsabr.com/app/mpesa-dashboard/admin-weeklyearnings-permanent.php',JSON.stringify({iduser: Number(localStorage.getItem('agente_dashboard_id'))}))

        
        
        setCostumersList(res.data)
        console.log(res.data)
    }

    

    useEffect(()=>{
        fetchData()
    }, [])


    return (
            <div className={style.dashboard}>
                <Header />

                {
                    costumersList.length !== 0 && 
                    <div className={style.costumers_list_container}>
                        <h3>Lançamentos dos agentes </h3>

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
                                <dt>Numero</dt>
                            </dl>
                        </div>
                        
                        {
                            costumersList.filter((item)=>{
                                if (searchTerm === '') { 
                                    return(
                                        <div key={item.id}>
                                            <dl className={style.litgh_item} >
                                                <dd>{item.name_user}</dd>
                                            </dl>
                                            <dl style={{color: item.isconfirm ? 'green' : 'orange'}} className={style.litgh_item} >
                                                <dd>{item.isconfirm ? 'confirmado' : 'pendente'}</dd>
                                            </dl>
                                            <dl className={style.litgh_item} >
                                                <dd>{item.earning}</dd>
                                            </dl>
                                            <dl className={style.litgh_item} >
                                                <dd>{item.number}</dd>
                                            </dl>
                                        </div>
                                    )
                                }
        
                                // if there was found any item with the values provided
                                else if(item.name.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return(
                                        <div key={item.id}>
                                            <dl className={style.litgh_item} >
                                                <dd>{item.name_user}</dd>
                                            </dl>
                                            <dl style={{color: item.isconfirm ? 'green' : 'orange'}} className={style.litgh_item} >
                                                <dd>{item.isconfirm ? 'confirmado' : 'pendente'}</dd>
                                            </dl>
                                            <dl className={style.litgh_item} >
                                                <dd>{item.earning}</dd>
                                            </dl>
                                            <dl className={style.litgh_item} >
                                                <dd>{item.number}</dd>
                                            </dl>
                                        </div>
                                    )
                                }
                            }).map((item)=>{ 
                                return(
                                    <div key={item.id}>
                                        <dl className={style.litgh_item} >
                                            <dd>{item.name_user}</dd>
                                        </dl>
                                        <dl style={{color: item.isconfirm ? 'green' : 'orange'}} className={style.litgh_item} >
                                            <dd>{item.isconfirm ? 'confirmado' : 'pendente'}</dd>
                                        </dl>
                                        <dl className={style.litgh_item} >
                                            <dd>{item.earning}</dd>
                                        </dl>
                                        <dl className={style.litgh_item} >
                                            <dd>{item.number}</dd>
                                        </dl>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                }


            </div>
    );
}
