import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FrontPage from "./components/Home/FrontPage";
import Register from "./components/Forms/Register/Register";
import Login from "./components/Forms/Login/Login";
import UiFrontPage from "./components/UI/UiFrontPage";

function App() {
    return(
        <Router>
        <Routes>
            <Route path='/' element={<FrontPage/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/userinterface' element={<UiFrontPage/>}/>
        </Routes>
        </Router>
    )
}

export default App;