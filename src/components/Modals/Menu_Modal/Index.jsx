import  { useNavigate } from "react-router-dom";
import { useState } from "react";
import { User, XCircle, Database, List } from "phosphor-react";
import Style from "./Style.module.css";

export const MenuModal = ({ userData }) => {
    const navigate = useNavigate();

    // submit values
    const logOutUser = async () => {
        localStorage.removeItem('currentRoute')
        localStorage.removeItem('agente_dashboard_id')
        localStorage.removeItem('agente_dashboard_username')
        localStorage.removeItem('agente_dashboard_email')
        localStorage.removeItem('agente_dashboard_number')
        localStorage.removeItem('agente_dashboard_isadmin')
        localStorage.removeItem('agente_dashboard_city')
        
        navigate('/signin')
    };

    return (
        <div data-aos="fade-down" className={Style.Menu_Modal}>
            <div className={Style.Menu_Modal_account_links}>
                <span onClick={logOutUser}><XCircle size={25} color='rgba(157, 109, 235, 0.856)'/> SAIR DA PLATFORMA</span>
            </div>
        </div>
    );
};
