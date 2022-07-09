import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FrontPage from "./components/Home/FrontPage";
import Header from "./components/Body/Header";
import Register from "./components/Forms/Register/Register"

function App() {
    return(
        <Router>
            <Header/>
        <Routes>
            <Route path='/' element={<FrontPage/>}/>
            <Route path='/Register' element={<Register/>}/>
        </Routes>
        </Router>
    )
}

export default App;