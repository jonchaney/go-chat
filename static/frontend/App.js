import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from "./components/presentationals/header";
import LoginContainer from "./components/login/loginContainer";

const App = () => (
    <div>
        <Route path="/" component={Header}  />
        <Switch>
            <Route path="/" component={LoginContainer} />
        </Switch>
    </div>
);

export default App;