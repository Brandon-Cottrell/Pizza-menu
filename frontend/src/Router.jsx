import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../src/components/Common/header';
import MainImage from './components/Common/MainImage';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
               
                
            </Switch>
        </>
    );
};
export default Router;
