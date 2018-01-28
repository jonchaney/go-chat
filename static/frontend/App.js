import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from "./components/presentationals/header";
import LoginContainer from "./components/login/loginContainer";
import ChatClientContainer from "./components/chatClient/chatClientContainer";

const App = () => (
    <div>
        <Route path="/" component={Header}  />
        <Switch>
            <Route exact path="/" component={LoginContainer} />
            <Route path="/chat" component={ChatClientContainer} />
        </Switch>
    </div>
);

export default App;