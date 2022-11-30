import {useState} from 'react'
import axios from 'axios'

import style from "./styles.module.css";
import { Header } from "../../../../components/header/Index";


export function DaylyAmountContainer() {
    // states 
    const [amount, setamount] =  useState('')
    const [message, setMessage] =  useState('')

    

    async function submitForm(e) {
        e.preventDefault();
        setMessage('')

        const values = {
            earnings: Number(amount),
            iduser: Number(localStorage.getItem('agente_dashboard_id')),
        }


        if(amount){
            let res =await  axios.post('https://pipocar.dnsabr.com/app/mpesa-dashboard/add-weekly-earnings.php',JSON.stringify(values))
            
            // console.log(res.config.data)
            // console.log(res.data)
            
            if(res.data){
                setMessage('Valor adicionado')
            }
            if(res.data.code_erro === '001'){
                setMessage('Adicione um novo relatorio na proxima semana')
            }
        }
        if(amount === '') setMessage('Insira o valor')
    }


    return (
            <div className={style.profile}>
                <Header />

                <div className={style.profile_header}>
                    <h1>Relatar ganhos semanais</h1>
                </div>
                
                <div className={style.profile_row_container}>
                    <form onSubmit={(e)=>submitForm(e)}>
                        <h4>Relatar montante</h4>
                        <p>Relate a informação do seu ganho semanal no campo abaixo, caso tenha cometido um erro, contacte o administrador para corrigi-lo.</p>
                        
                        <div>
                            <input placeholder='Ganho diario' type='text' onChange={(e)=>setamount(e.target.value)}/>
                        </div>
                        <br/><p style={{color: 'violet'}}>{message}</p>
                        <button>SALVAR DETALHES</button>
                    </form>
                </div>
            </div>
    );
}
