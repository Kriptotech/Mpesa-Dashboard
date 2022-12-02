import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

import style from "./styles.module.css";
import { Header } from "../../../../components/header/Index";


export function Main() {
    // states 
    const navigate =  useNavigate()
    const [costumersList, setCostumersList] =  useState([])


    // function to get information of the agents
    async function fetchData() {
        let res =await  axios.post('https://pipocar.dnsabr.com/app/mpesa-dashboard/list-request.php')

        setCostumersList(res.data)
        // console.log(res.data)
    }

    

    useEffect(()=>{
        fetchData()
    }, [])


    return (
            <div className={style.costumers}>
                <Header />

                {   costumersList.length !== 0 ?
                        <div className={style.costumers_header}>
                            <h1>Confirmar pedidos de float</h1>
                            <p>Certifique-se de confrmar os pedidos de float</p>
                        </div> 
                    :
                        <div className={style.costumers_header}>
                            <h1>Todos pedidos de float estão confirmados</h1>
                        </div> 
                }

                {
                    costumersList.length !== 0 && 
                    <div className={style.costumers_list_container}>

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
                        
                        {
                            costumersList.map((item)=>{ 
                                return(
                                    <div key={item.id}>
                                            <dl className={style.litgh_item} onClick={()=>navigate('/confirm-float-request-item', {state: item})}>
                                                <dd>{item.agent_name}</dd>
                                            </dl>
                                            <dl className={style.litgh_item} onClick={()=>navigate('/confirm-float-request-item', {state: item})}>
                                                <dd>{item.isconfirm ? 'confirmado' : 'não confirmado'}</dd>
                                            </dl>
                                            <dl className={style.litgh_item} onClick={()=>navigate('/confirm-float-request-item', {state: item})}>
                                                <dd>{item.quantity}</dd>
                                            </dl>
                                            <dl className={style.litgh_item} onClick={()=>navigate('/confirm-float-request-item', {state: item})}>
                                                <dd>{item.floatype}</dd>
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
