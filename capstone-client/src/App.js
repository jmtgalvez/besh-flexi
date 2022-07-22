import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./components/Forms/Register/Register";
import Login from "./components/Forms/Login/Login";

import { UserContext } from "./components/UserContext";
import HomePage from "./components/HomePage/HomePage";
import HomePage2 from "./components/Home/HomePage";
import { getAccessToken } from './components/api/auth';

function App() {
    const [user, setUser] = useState(null);
    
    if (user == null) {
        getAccessToken('')
            .then( result => setUser(result.data.user))
    }

    return(
        <UserContext.Provider value={{user, setUser}}>
            <Router>
                <Routes>
                    <Route path='/' element={ user ? <HomePage /> : <LandingPage /> } />
                    <Route path='/Register' element={<Register />}/>
                    <Route path='/Login' element={<Login />}/>
                    <Route path='/home' element={<HomePage />} />
                </Routes>
            </Router>
        </UserContext.Provider>
    )
}

export default App;