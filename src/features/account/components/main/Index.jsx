import {useEffect,useState} from 'react'
import {
    MagnifyingGlass,
} from 'phosphor-react'

import style from "./styles.module.css";
import { Header } from "../../../../components/header/Index";


export function AcountContainer() {
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
            <div className={style.profile}>
                <Header />

                <div className={style.profile_header}>
                    <h1>Minha conta</h1>
                </div>
                
                <div className={style.profile_row_container}>
                    <div className={style.profile_card}>
                        <div className={style.profile_card_box}>
                            <img src='profile.png' alt='' width='50px'/>
                            <span>Catarina johnson</span>
                            <p>Cidade de nampula</p>
                            <div></div>
                        </div>
                    </div>

                    <form>
                        <h4>perfil</h4>
                        <p>A informação pode ser editada</p>
                        
                        <div>
                            <input placeholder='Nome' type='text'/>
                            <input placeholder='E-mail' type='email'/>
                            <input placeholder='Numero de telefone' type='number'/>
                            <input placeholder='Pais' type='text'/>
                            <input placeholder='Cidade' type='text'/>
                            <input placeholder='Codigo do agente' type='number'/>
                        </div>
                        <button>SALVAR DETALHES</button>
                    </form>
                </div>
            </div>
    );
}
