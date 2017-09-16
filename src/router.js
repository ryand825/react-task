import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ViewTask from './components/ViewTask/ViewTask';
import MyTasks from './components/MyTasks/MyTasks';


export default (
    <Switch>
        <Route component={MyTasks} exact path="/" />
        <Route component={ViewTask} path="/TaskView" />
    </Switch>
)