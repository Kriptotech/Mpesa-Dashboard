import {useEffect,useState} from 'react'
import {
    MagnifyingGlass,
} from 'phosphor-react'

import style from "./styles.module.css";
import { Header } from "../../../../components/header/Index";
import axios from 'axios'

export function AddCostumerContainer() {
    // states 
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [username, setusername] =  useState()
    const [email, setemail] =  useState()
    const [password, setpassword] =  useState()
    const [agent_code, setagent_code] =  useState()
    const [city, setcity] =  useState(1)
    const [country, setcountry] =  useState(1)
    const [number, setnumber] =  useState()
    const [message, setmessage] =  useState()


    // function to get information of the user
    async function Registrar(e) {
        e.preventDefault()

        const values = {
            number: Number(number),
            password,
            name: username,
            agent_code,
            email,
            city: Number(city),
            country: Number(country),
        }

        

      
	let res =await  axios.post('https://pipocar.dnsabr.com/app/mpesa-dashboard/cad-agent.php',JSON.stringify(values))
    
    // console.log(res.config.data)
    // console.log(res.data)

    if(res.data === true){
        setmessage('Adicionado')
    }
    if(typeof(res.data) === 'string'){
        res.data === 'agent-code-exist' && setmessage('codigo do agente ja existe')
    }


    }

    

    useEffect(()=>{
        // getUserInfo()
    }, [])


    return (
            <div className={style.profile}>
                <Header />

                <div className={style.profile_header}>
                    <h1>Registrar novo agente</h1>
                </div>
                
                <div className={style.profile_row_container}>
                    <form onSubmit={Registrar}>
                        <h4>Adicionar</h4>
                        <p>Adicione as informações do agente nos campos abaixo</p>
                        
                        <div>
                            <input required placeholder='Nome' type='text'  onChange={(e)=>setusername(e.target.value)}/>
                            <input required placeholder='E-mail' type='email' onChange={(e)=>setemail(e.target.value)}/>
                            <input required placeholder='Numero de telefone' type='number' onChange={(e)=>setnumber(e.target.value)}/>

                            <select onChange={(e)=>setcountry(e.target.value)}>
                                <option value={1}>Mocambique</option>
                            </select>

                            <select onChange={(e)=>setcity(e.target.value)}>
                                <option value={1}>Nampula</option>
                                <option value={2}>Lichinga</option>
                                <option value={3}>Beira</option>
                            </select>
                            
                            <input required placeholder='Codigo do agente' type='number' onChange={(e)=>setagent_code(e.target.value)}/>
                            <input required placeholder='Palavra passe' type='text' onChange={(e)=>setpassword(e.target.value)}/>
                        </div>
                        <button>SALVAR DETALHES</button>
                        <small>{message}</small>
                    </form>
                </div>
            </div>
    );
}
