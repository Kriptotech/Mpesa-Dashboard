import React, { useEffect, useState } from "react";
import { Router } from "./routes/Index";
import { MainContext } from "./context/Index";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
    useEffect(() => {
        Aos.init({ duration: 600 });
    }, []);



    return (
        <MainContext>
            <div className="app">
                <Router /> 
            </div>
        </MainContext>
    );
}

export default App;
