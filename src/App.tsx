import React from 'react';
import {Switch,Route}from 'react-router-dom';
import Home from './component/Home'
const App=()=>{
    return (
        <div>
            <Switch>
                <Route path='/' exact component={Home}/>
            </Switch>
        </div>
    )
}
export default App