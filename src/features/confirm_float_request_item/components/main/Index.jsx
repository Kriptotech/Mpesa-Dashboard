import {useState} from 'react'
import { useLocation, useNavigate } from "react-router-dom";

import style from "./styles.module.css";
import axios from 'axios'
import { Header } from "../../../../components/header/Index";


export function Main() {
    // states 
    const itemData = useLocation()?.state;
    const navigate = useNavigate();
    const [costumersList, setCostumersList] =  useState()
    const [message, setMessage] =  useState()

    // console.log(itemData.id);
    async function confirmRelatory() {
        const values = {
            id: Number(itemData.id),
        }
        
        let res =await  axios.post('https://pipocar.dnsabr.com/app/mpesa-dashboard/confirm-weekly-earning.php',JSON.stringify(values))
            
        // console.log(res.config.data)
        // console.log(res.data)
        
        res.data && navigate('/confirm-weekly-relatory')

        !res.data && setMessage('Falha ao confirmar')
    }
    


    return (
            <div className={style.relatory}>
                <Header />

                <div className={style.relatory_header}>
                    <h1>Confirmar pedido de float do {itemData.name_user}</h1>
                </div>

                
                    <div className={style.relatory_list_container}>
                        <div className={style.relatory_list_box}>
                            <div>
                                <p>Pedido de float feito por: <span>{itemData.name_user}</span></p>
                            </div>
                            <div>
                                <p>Montante inserido no pedido de float: <span>{itemData.earning}</span></p>
                            </div>
                            <div>
                                <p>Data em que o pedido de float foi feito : <span>{itemData.date}</span></p>
                            </div>
                            <div>
                                <p>Numero do agente que pediu o montante: <span>{itemData.number}</span></p>
                            </div>
                            <div>
                                <p>Localização do agente que pediu o montante: <span>{itemData.city}</span></p>
                            </div>
                            <div>
                                <p>Codigo do agente que pediu o montante: <span>{itemData.agent_code}</span></p>
                            </div>

                            <div>
                                <button onClick={()=>confirmRelatory()}>CONFIRMAR</button>
                            </div>

                            
                        </div>
                    </div>

                
            </div>
    );
}
