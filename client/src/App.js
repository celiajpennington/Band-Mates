import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css'
// import '/App.css';
import NavTabsHome from "./components/NavTabsHome";
import Home from '../src/components/pages/Home';
import Login from '../src/components/pages/Login';
import Signup from '../src/components/pages/Signup';
import NavTabsDashboard from '../src/components/NavTabsDashboard';
import Dashboard from '../src/components/pages/Dashboard';
import ViewAllPosts from '../src/components/pages/ViewAllPosts';
import ViewMyPosts from '../src/components/pages/ViewMyPosts'
import CreatePost from "./components/pages/CreatePost";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
  } from '@apollo/client';
  import { setContext } from '@apollo/client/link/context';
 
  const httpLink = createHttpLink({
    uri: '/graphql',
  });
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

function App() {


    // do graphQL Query me to see if u r logged in rn 
    var loggedIn = false

    return (
        <ApolloProvider client= { client }>
        <Router>

            {/*
            <Switch>
                <NavTabsHome/>
                <Route exact path='/' component={ Home }/>
                <Route exact path='/login' component={ Login }/>
                <Route exact path='/signup' component={ Signup }/>
            </Switch> 
            */}

            {/* <Switch> */}

            {loggedIn ? (<NavTabsDashboard />) : (<NavTabsHome />)}
            
            <Route exact path='/dashboard' component={ Dashboard }/>
            <Route exact path='/viewallposts' component={ ViewAllPosts }/>
            <Route exact path='/viewmyposts' component={ ViewMyPosts }/>
            <Route exact path='/createpost' component={ CreatePost }/>   
            <Route exact path='/login' component={ Login }/>
            <Route exact path='/signup' component={ Signup }/> 
        
            {/* </Switch> */}
         
        
            
    
        </Router>
        </ApolloProvider>
    )
}

export default App;