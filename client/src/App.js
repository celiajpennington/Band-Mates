import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css'
// import '/App.css';
import NavTabsHome from "./components/NavTabsHome";
import Home from '../src/components/pages/Home';
import Login from '../src/components/pages/Login';
import Signup from '../src/components/pages/Signup';


function App() {
    return (
        <Router>
            <NavTabsHome/>
            <Route exact path='/' component={ Home }/>
            <Route exact path='/login' component={ Login }/>
            <Route exact path='/signup' component={ Signup }/>
        </Router>
    )
}

export default App;