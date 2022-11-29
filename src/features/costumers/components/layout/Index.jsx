import {useEffect,useState} from 'react'
import style from "./styles.module.css";

import { Sidebar } from "../../../../components/sidebar/Index";
import { CustomerContainer } from "../main/Index";


export function Layout() {;


    return (
            <div className={style.layout}>
                <Sidebar />
                <CustomerContainer />
            </div>
    );
}
