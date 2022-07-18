import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from "./components/Home/LandingPage";
import Register from "./components/Forms/Register/Register";
import Login from "./components/Forms/Login/Login";

import { UserContext } from "./components/UserContext";
import HomePage from "./components/UI/HomePage";

function App() {
    const [user, setUser] = useState(null);

    useEffect( () => {
        console.log(user);
    }, [user])

    return(
        <UserContext.Provider value={{user, setUser}}>
            <Router>
                <Routes>
                    <Route path='/' element={<LandingPage />}/>
                    <Route path='/Register' element={<Register />}/>
                    <Route path='/Login' element={<Login />}/>
                    <Route path='/Home' element={<HomePage />}/>
                </Routes>
            </Router>
        </UserContext.Provider>
    )
}

export default App;