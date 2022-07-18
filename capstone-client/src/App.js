import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FrontPage from "./components/Home/FrontPage";
import Register from "./components/Forms/Register/Register";
import Login from "./components/Forms/Login/Login";

import { UserContext } from "./components/UserContext";
import UiFrontPage from "./components/UI/UiFrontPage";

function App() {
    const [user, setUser] = useState(null);

    useEffect( () => {
        // console.log(user);
    }, [user])

    return(
        <UserContext.Provider value={{user, setUser}}>
            <Router>
                <Routes>
                    <Route path='/' element={<FrontPage />}/>
                    <Route path='/Register' element={<Register />}/>
                    <Route path='/Login' element={<Login />}/>
                    <Route path='/Home' element={<UiFrontPage />}/>
                </Routes>
            </Router>
        </UserContext.Provider>
    )
}

export default App;