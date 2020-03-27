import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Profile from './Pages/Profiles';
import Logon from './Pages/Logon/';
import Register from './Pages/Register';
import NewIncidents from './Pages/NewIncidents'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component ={Logon}/>
                <Route path='/register' component ={Register}/>     
                <Route path='/profile' component={Profile}/>
                <Route path='/incidents/new' component={NewIncidents}/>

            </Switch>
        </BrowserRouter>
    );    
}