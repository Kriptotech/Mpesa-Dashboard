import {useEffect,useState} from 'react'
import {
    MagnifyingGlass,
} from 'phosphor-react'
import axios from 'axios'

import style from "./styles.module.css";
import { Header } from "../../../../components/header/Index";


export function CustomerContainer() {
    // states 
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [username, setUsername] =  useState('')
    const [id, setId] =  useState()
    const [costumersList, setCostumersList] =  useState()


    // function to get information of the agents
    async function getClientsInfo() {
        let user = await localStorage.getItem('server_url');

        let res =await  axios.post('https://pipocar.dnsabr.com/app/mpesa-dashboard/list-agent.php')
        
        setCostumersList(res.data)
        // console.log(res.data)
    }

    

    useEffect(()=>{
        getClientsInfo()
    }, [])


    return (
            <div className={style.costumers}>
                <Header />

                <div className={style.costumers_header}>
                    <h1>Agentes</h1>
                    <a href='add-agents'>Adicionar agentes</a>
                </div>
                
                <div className={style.costumers_search_container}>
                    <div className={style.costumers_search_box}>
                        <div className={style.costumers_search}>
                            <MagnifyingGlass color='#888' size={25}/>
                            <input type='text' placeholder='Pesquisar agente'/>
                        </div>
                    </div>
                </div>

                {
                    costumersList && 
                    <div className={style.costumers_list_container}>
                        <div className={style.dark_item_invisible}>
                            <dl className={style.dark_item}>
                                <dt>Nome</dt>
                            </dl>
                            <dl className={style.dark_item}>
                                <dt>E-mail</dt>
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
                                        <dl className={style.litgh_item}>
                                            <dd>{item.name}</dd>
                                        </dl>
                                        <dl className={style.litgh_item}>
                                            <dd>{item.email}</dd>
                                        </dl>
                                        <dl className={style.litgh_item}>
                                            <dd>{item.city}</dd>
                                        </dl>
                                        <dl className={style.litgh_item}>
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
