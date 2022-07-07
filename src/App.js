import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router';
import FrontPage from "./components/Body/FrontPage";

function App() {
    return(
        <Router>
        <Routes>
            <Route path='/' elements={<FrontPage/>}/>
        </Routes>
        </Router>
    )
}

export default App;