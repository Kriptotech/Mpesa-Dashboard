import {useEffect,useState} from 'react'
import {
    MagnifyingGlass,
} from 'phosphor-react'

import style from "./styles.module.css";
import { Header } from "../../../../components/header/Index";


export function AcountContainer() {
    async function submitForm() {
        
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
                            <img src='profile.png' alt='' width='50px'/>
                            <span>{localStorage.getItem('agente_dashboard_username')}</span>
                            <p>{localStorage.getItem('agente_dashboard_email')}</p>
                            <div></div>
                        </div>
                    </div>

                    <form>
                        <h4>perfil</h4>
                        <p>A informação pode ser editada</p>
                        
                        <div>
                            <input placeholder={localStorage.getItem('agente_dashboard_username') ? localStorage.getItem('agente_dashboard_username') : 'Nome'} type='text'/>

                            <input placeholder={localStorage.getItem('agente_dashboard_email') ? localStorage.getItem('agente_dashboard_email') : 'E-mail'} type='email'/>

                            <input placeholder={localStorage.getItem('agente_dashboard_username') ? localStorage.getItem('agente_dashboard_number') : 'Numero de telefone'} type='number'/>


                            <input placeholder={localStorage.getItem('agente_dashboard_agent_code') ? localStorage.getItem('agente_dashboard_agent_code') : 'Codigo do agente'} type='number'/>
                        </div>
                        <button>SALVAR DETALHES</button>
                    </form>
                </div>
            </div>
    );
}
