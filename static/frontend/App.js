import React from 'react';
import { Route } from 'react-router-dom';

import DefaultContainer from "./components/default/defaultContainer";

const App = () => (
    <Route exact path="/" component={DefaultContainer} />
);

export default App;