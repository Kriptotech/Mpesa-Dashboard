import {useState} from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'

import style from "./styles.module.css";
import { Header } from "../../../../components/header/Index";


export function Main() {
    const itemData = useLocation()?.state;
    const navigate = useNavigate();
    
    const [username, setusername] =  useState(itemData?.name ? itemData.name : '')
    const [email, setemail] =  useState(itemData?.email ? itemData?.email : '')
    const [agent_code, setagent_code] =  useState(itemData?.agent_code ? itemData?.agent_code : '')
    const [city, setcity] =  useState(1)
    const [country, setcountry] =  useState(1)
    const [number, setnumber] =  useState(itemData?.number ? itemData?.number : '')
    const [agentnumber, setagentnumber] =  useState(itemData?.agent_number ? itemData?.agent_number : '')
    const [agentname, setagentname] =  useState(itemData?.agent_name ? itemData?.agent_name : '')
    const [bi, setbi] =  useState(itemData?.bi ? itemData?.bi : '')
    const [pin, setpin] =  useState(itemData?.pin_agent ? itemData?.pin_agent : '')
    const [editar, seteditar] =  useState(false)
    const [status, setstatus] =  useState('delete')

    const [message, setMessage] =  useState('')

    
    
    async function submitForm(e) {
        setMessage('')

        const values = {
            agent_code: agent_code,
            agent_name: agentname ,
            number: number,
            agent_number: agentnumber,
            bi: bi ,
            city,
            country,
            email: email ,
            id: itemData.id,
            pin_agent: pin,
            name: username,
            status: status,
        }

        let res =await  axios.post('https://pipocar.dnsabr.com/app/mpesa-dashboard/admin-update-agent.php',JSON.stringify(values))
            
            // console.log(res.config.data)
            // console.log(values)
            // console.log(res.data)

            if(res.data === true) setMessage('Atualizado')

            if(res.data === 'deleted') navigate('/customers')
            
    }


    return (
            <div className={style.profile}>
                <Header />

                <div className={style.profile_header}>
                    <h1>{itemData?.name}</h1>
                </div>
                
                <div className={style.profile_row_container}>
                    <form>
                        <h4>perfil</h4>
                        <p>A informação pode ser editada</p>
                        
                        {   !editar &&
                            <div>
                                <input readOnly placeholder={itemData.name} type='text' />

                                <input readOnly placeholder={itemData.email} type='email'/>

                                <input readOnly placeholder={itemData.number} type='number'/>

                                <input readOnly placeholder='City' type='text'/>

                                <input readOnly placeholder={itemData.id}/>
                            </div>
                        }




                        {   editar &&
                            <div>
                                <input value={username} required placeholder='Nome' type='text'  onChange={(e)=>setusername(e.target.value)}/>

                                <input required value={agentname} placeholder='Nome do operador' type='text' onChange={(e)=>setagentname(e.target.value)}/>


                                <input value={pin} required placeholder='Pin do Agente' type='text' onChange={(e)=>setpin(e.target.value)}/>

                                <input value={bi} required placeholder='BI' type='text' onChange={(e)=>setbi(e.target.value)}/>

                                <input value={email} required placeholder='E-mail' type='email' onChange={(e)=>setemail(e.target.value)}/>

                                <input value={number} required placeholder='Numero de telefone' type='number' onChange={(e)=>setnumber(e.target.value)}/>

                                <input value={agentnumber} required placeholder='Numero de telefone do operador' type='number' onChange={(e)=>setagentnumber(e.target.value)}/>

                                <select required onChange={(e)=>setcountry(e.target.value)}>
                                    <option value={1}>Mocambique</option>
                                </select>

                                <select  required onChange={(e)=>setcity(e.target.value)}>
                                    <option value={1}>Nampula</option>
                                </select>

                                <input value={agent_code} required placeholder='ID do agente' type='number' onChange={(e)=>setagent_code(e.target.value)}/>
                            </div>
                        }

                        <br/><p style={{color: 'violet'}}>{message}</p>

                        {!editar && <button  onClick={(e)=>{
                            e.preventDefault()
                            setstatus('delete')
                            submitForm(e, setstatus('delete'))
                        }}>DELETAR</button>}

                        {!editar && <button  onClick={(e)=>{
                            e.preventDefault()
                            seteditar(true)
                            setstatus('update')
                        }}>EDITAR DETALHES</button>}


                        {editar && <button onClick={(e)=>{
                            e.preventDefault()
                            
                            submitForm(e, setstatus('update'))}
                        }>SALVAR DETALHES</button>}
                    </form>
                </div>
            </div>
    );
}
