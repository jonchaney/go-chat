import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from "./components/presentationals/header.jsx";
import LoginContainer from "./components/login/loginContainer";

const App = () => (
    <div>
        <Route path="/" component={Header} />
        <Route path="/" component={LoginContainer} />
    </div>
);

export default App;