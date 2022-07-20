import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./components/Forms/Register/Register";
import Login from "./components/Forms/Login/Login";

import { UserContext } from "./components/UserContext";
import HomePage from "./components/HomePage/HomePage";
import HomePage2 from "./components/Home/HomePage";
import * as Api from './components/api/auth';

function App() {
    const [user, setUser] = useState(null);
    
    if (user == null) {
        const token_data = localStorage.getItem('refresh_token');
        if ( token_data ) {
            const refresh_token = JSON.parse(token_data);
            Api.getAccessToken(refresh_token)
                .then( result => {
                    setUser(result.data.user);
                })
        }
    }

    return(
        <UserContext.Provider value={{user, setUser}}>
            <Router>
                <Routes>
                    <Route path='/' element={<LandingPage />}/>
                    <Route path='/Register' element={<Register />}/>
                    <Route path='/Login' element={<Login />}/>
                    <Route path='/Home' element={<HomePage />}/>
                    <Route path='/Home2' element={<HomePage2 />}/>
                </Routes>
            </Router>
        </UserContext.Provider>
    )
}

export default App;