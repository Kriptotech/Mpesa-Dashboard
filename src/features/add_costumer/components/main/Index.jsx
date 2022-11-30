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
    const [agentnumber, setagentnumber] =  useState()
    const [agentname, setagentname] =  useState()
    const [message, setmessage] =  useState()
    const [bi, setbi] =  useState()
    const [pin, setpin] =  useState()
    const [bitrhdate, setbitrhdate] =  useState()
    const [initialinvestiment, setinitialinvestiment] =  useState()


    // function to get information of the user
    async function Registrar(e) {
        e.preventDefault()
        setmessage('')
        
        const values = {
            number: Number(number),
            agent_number: Number(agentnumber),
            password,
            name: username,
            agent_name: agentname,
            bi,
            agent_code,
            email,
            pin_agent: pin,
            initial_investment: initialinvestiment,
            city: Number(city),
            country: Number(country),
            birthday: bitrhdate,
        }
        
        
        
        
        let res =await  axios.post('https://pipocar.dnsabr.com/app/mpesa-dashboard/cad-agent.php',JSON.stringify(values))
        

        console.log(res.config.data)
        console.log(res.data)

        if(res.data.status === true){
            setmessage('Adicionado')
        }
        if(res.data.status === false){
            setmessage('Falha ao adicionar')
        }
        if(res.data.status === false && res.data.status_text === 'user-exist'){
            setmessage('Usuario ja existe')
        }
        if(typeof(res.data.status_text) === 'string'){
            res.data.user_exist === 'user-exist' && setmessage('codigo do agente ja existe')
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

                            <input required  placeholder='Nome do operador' type='text' onChange={(e)=>setagentname(e.target.value)}/>

                            <input required placeholder='Investimento inicial' type='number' onChange={(e)=>setinitialinvestiment(e.target.value)}/>

                            <input required placeholder='Pin do Agente' type='text' onChange={(e)=>setpin(e.target.value)}/>

                            <input required placeholder='BI' type='text' onChange={(e)=>setbi(e.target.value)}/>

                            <input required placeholder='Data' type='date' onChange={(e)=>setbitrhdate(e.target.value)}/>

                            <input required placeholder='E-mail' type='email' onChange={(e)=>setemail(e.target.value)}/>

                            <input required placeholder='Numero de telefone' type='number' onChange={(e)=>setnumber(e.target.value)}/>

                            <input required placeholder='Numero de telefone do operador' type='number' onChange={(e)=>setagentnumber(e.target.value)}/>

                            <select required onChange={(e)=>setcountry(e.target.value)}>
                                <option value={1}>Mocambique</option>
                            </select>

                            <select required onChange={(e)=>setcity(e.target.value)}>
                                <option value={1}>Nampula</option>
                            </select>
                            
                            <input required placeholder='ID do agente' type='number' onChange={(e)=>setagent_code(e.target.value)}/>

                            <input required placeholder='Palavra passe' type='text' onChange={(e)=>setpassword(e.target.value)}/>
                        </div>
                        <button>SALVAR DETALHES</button>
                        <small>{message}</small>
                    </form>
                </div>
            </div>
    );
}
