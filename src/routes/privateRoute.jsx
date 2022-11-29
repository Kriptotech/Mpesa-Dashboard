import { Navigate } from "react-router-dom";



export function PrivateRoute({children}) {

    var user = localStorage.getItem('agente_dashboard_id') ? true : false
    

    return user ? children : <Navigate to='/signin'/>
}
