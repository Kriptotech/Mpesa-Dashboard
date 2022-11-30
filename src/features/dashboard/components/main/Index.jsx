import {useEffect,useState} from 'react'
import {
    ArrowsDownUp,
    Users,
    Article,
    CurrencyDollar,
} from 'phosphor-react'

import style from "./styles.module.css";
import { Header } from "../../../../components/header/Index";


export function DashboarContainer() {
    // states 
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [username, setUsername] =  useState('')
    const [id, setId] =  useState()
    const [formatedUsername, setFormatedUsername] =  useState('')

    // cookies 
    

    // function to get information of the user
    async function getUserInfo() {
        let user = await localStorage.getItem('server_url');

        await fetch(`${localStorage.getItem('server_url')}/users/single/${user}`)
            .then(res=>res.json())
            .then(data=>{
                // console.log(data.result);
                setUsername(data.result.username);
                setId(data.result.id);
                
                if(data.result.made_tutorial === 'false'){
                    setIsModalVisible(true)
                }
            })
            .catch(err=>console.log(err))
        
    }

    

    useEffect(()=>{
        // getUserInfo()
    }, [])


    return (
            <div className={style.dashboard}>
                <Header />

                <div className={style.dashboard_cards_box}>
                    <div className={style.dashboard_card}>
                        <div className={style.dashboard_card_row}>
                            <div>
                                <span>BUDGET</span>
                                <span>$23k</span>
                            </div>
                            <small style={{background: '#D14343'}}><Article color='#fff' size={25}/></small>
                        </div>
                        
                    </div>
                    <div className={style.dashboard_card}>
                        <div className={style.dashboard_card_row}>
                            <div>
                                <span>AGENTES</span>
                                <span>23k</span>
                            </div>
                            <small style={{background: '#14B8A6'}}><Users color='#fff' size={25}/></small>
                        </div>
                        
                    </div>
                    <div className={style.dashboard_card}>
                        <div className={style.dashboard_card_row}>
                            <div>
                                <span>PROGRESSO</span>
                                <span>$23k</span>
                            </div>
                            <small style={{background: '#FFB020'}}><ArrowsDownUp color='#fff' size={25}/></small>
                        </div>
                        
                    </div>
                    <div className={style.dashboard_card}>
                        <div className={style.dashboard_card_row}>
                            <div>
                                <span>Ganho total</span>
                                <span>$23k</span>
                            </div>
                            <small style={{background: '#5048E5'}}><CurrencyDollar color='#fff' size={25}/></small>
                        </div>
                        
                    </div>
                </div>

                
            </div>
    );
}
