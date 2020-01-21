import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import ActorsContainer from './components/Actors/ActorsContainer';
import MainPage from './components/MainPage/MainPage';

const App = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path='/actors' component={ActorsContainer}/>
                <Route path='/' component={MainPage}/>
            </Switch>
        </div>
    );
};

export default App;
