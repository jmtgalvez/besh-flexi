import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FrontPage from "./components/Body/FrontPage";
import Header from "./components/Body/Header";

function App() {
    return(
        <Router>
            <Header/>
        <Routes>
            <Route path='/' element={<FrontPage/>}/>
        </Routes>
        </Router>
    )
}

export default App;