import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { PrivateRoute } from "./privateRoute";
import { Dashboard } from "../pages/Dashboard";
import { Costumers } from "../pages/Costumers";
import { Account } from "../pages/Account";
import { AddCostumer } from "../pages/AddCostumer";
import { DaylyAmount } from "../pages/DaylyAmount";
import { Login } from "../pages/Login";


export function Router() { 

    

    return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/dayly-amount" element={<PrivateRoute><DaylyAmount  /></PrivateRoute>} />
                        <Route path="/add-agent" element={<PrivateRoute><AddCostumer /></PrivateRoute>} />
                        <Route path="/account" element={<PrivateRoute><Account /></PrivateRoute>} />
                        <Route path="/customers" element={<PrivateRoute><Costumers /></PrivateRoute>} />
                        <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                        <Route path="/signin" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </div>
            
    );
}
