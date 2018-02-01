import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from "./components/presentationals/header";
import LoginContainer from "./components/login/loginContainer";
import ChatClientContainer from "./components/chatClient/chatClientContainer";

const App = () => (
    <div>
        <Route path="/" component={Header}  />
        <Route path="/" component={ChatClientContainer} />
    </div>
);

export default App;