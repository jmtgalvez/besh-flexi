import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./components/Forms/Register/Register";
import Login from "./components/Forms/Login/Login";

import { UserContext } from "./components/UserContext";
import HomePage from "./components/HomePage/HomePage";
import HomePage2 from "./components/Home/HomePage";

function App() {
    const [user, setUser] = useState(null);

    return(
        <UserContext.Provider value={{user, setUser}}>
            <Router>
                <Routes>
                    <Route path='/' element={<LandingPage />}/>
                    <Route path='/Register' element={<Register />}/>
                    <Route path='/Login' element={<Login />}/>
                    <Route path='/Home2' element={<HomePage />}/>
                    <Route path='/Home' element={<HomePage2 />}/>
                </Routes>
            </Router>
        </UserContext.Provider>
    )
}

export default App;