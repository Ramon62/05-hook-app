import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import {AboutScreen} from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import {LoginScreen} from './LoginScreen';
import { NavBar } from './NavBar';


export const AppRouter = () => {
    return (
        <Router>
            <div>  
            <NavBar/> 
            <div className="container">
                <Switch>
                    <Route exact path="/about">
                        <AboutScreen />
                    </Route>
                    <Route exact path="/login">
                        <LoginScreen />
                    </Route>
                    <Route exact path="/">
                        <HomeScreen />
                    </Route>
                    <Redirect to='/'/>
                </Switch>
                </div>
            </div>

        </Router>
    )
}
