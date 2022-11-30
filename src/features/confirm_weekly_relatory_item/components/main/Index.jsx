import {useState} from 'react'
import { useLocation, useNavigate } from "react-router-dom";

import style from "./styles.module.css";
import { Header } from "../../../../components/header/Index";


export function Main() {
    // states 
    const itemData = useLocation()?.state;
    const navigate = useNavigate();
    const [costumersList, setCostumersList] =  useState()

    async function confirmRelatory() {
        navigate('/confirm-weekly-relatory')
    }
    


    return (
            <div className={style.relatory}>
                <Header />

                <div className={style.relatory_header}>
                    <h1>Confirmar relatorio do {itemData.name}</h1>
                </div>

                
                    <div className={style.relatory_list_container}>
                        <div className={style.relatory_list_box}>
                            <div>
                                <p>Relatorio feito por: <span>{itemData.name}</span></p>
                            </div>
                            <div>
                                <p>Montante inserido no relatorio: <span>{itemData.amount}</span></p>
                            </div>
                            <div>
                                <p>Data em que o relatorio foi feito : <span>{itemData.date}</span></p>
                            </div>
                            <div>
                                <p>Numero do agente que realizou o montante: <span>{itemData.number}</span></p>
                            </div>
                            <div>
                                <p>Localização do agente que realizou o montante: <span>{itemData.city}</span></p>
                            </div>

                            <div>
                                <button onClick={()=>confirmRelatory()}>CONFIRMAR</button>
                            </div>

                            
                        </div>
                    </div>

                
            </div>
    );
}
