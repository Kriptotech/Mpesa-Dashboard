import {useEffect,useState} from 'react'
import {
    MagnifyingGlass,
} from 'phosphor-react'

import style from "./styles.module.css";
import { Header } from "../../../../components/header/Index";


export function DaylyAmountContainer() {
    // states 
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [username, setUsername] =  useState('')
    const [id, setId] =  useState()
    const [formatedUsername, setFormatedUsername] =  useState('')

    // cookies 
    

    // function to get information of the user
    async function getUserInfo() {
        
    }

    

    useEffect(()=>{
        // getUserInfo()
    }, [])


    return (
            <div className={style.profile}>
                <Header />

                <div className={style.profile_header}>
                    <h1>Relatar ganhos semanais</h1>
                </div>
                
                <div className={style.profile_row_container}>
                    <form>
                        <h4>Relatar montante</h4>
                        <p>Relate a informação do seu ganho semanal no campo abaixo</p>
                        
                        <div>
                            <input placeholder='Ganho diario' type='number'/>
                        </div>
                        <button>SALVAR DETALHES</button>
                    </form>
                </div>
            </div>
    );
}
