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
        let res =await  axios.post('https://pipocar.dnsabr.com/app/mpesa-dashboard/weekly-earnings-confirmed.php')
        
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
                            <h1>Relatorios semanais</h1>
                        </div>
                    :
                        <div className={style.costumers_header}>
                            <h1>Nenhum relatorio semanail</h1>
                        </div> 
                }

                {
                    costumersList.length !== 0  && 
                    <div className={style.costumers_list_container}>
                        <div className={style.dark_item_invisible}>
                            <dl className={style.dark_item}>
                                <dt>Author</dt>
                            </dl>
                            <dl className={style.dark_item}>
                                <dt>Quantia</dt>
                            </dl>
                            <dl className={style.dark_item}>
                                <dt>Localização</dt>
                            </dl>
                            <dl className={style.dark_item}>
                                <dt>Telefone</dt>
                            </dl>
                        </div>
                        
                        {
                            costumersList.map((item)=>{
                                return(
                                    <div key={item.id}>
                                        <dl className={style.litgh_item} onClick={()=>navigate('/weekly-relatory-item', {state: item})}>
                                            <dd>{item.name_user}</dd>
                                        </dl>
                                        <dl className={style.litgh_item} onClick={()=>navigate('/weekly-relatory-item', {state: item})}>
                                            <dd>{item.earning}</dd>
                                        </dl>
                                        <dl className={style.litgh_item} onClick={()=>navigate('/weekly-relatory-item', {state: item})}>
                                            <dd>{item.city}</dd>
                                        </dl>
                                        <dl className={style.litgh_item} onClick={()=>navigate('/weekly-relatory-item', {state: item})}>
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
