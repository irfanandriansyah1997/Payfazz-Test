import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

/**
 * Pages Import
 */
import GettingStarted from '@/pages/getting-started';
import Login from '@/pages/login';
import Signup from '@/pages/signup';

const AppRouter = () => (
    <Router>
        <Route
            exact
            path="/"
            component={GettingStarted}
        />
        <Route
            path="/getting-started"
            component={GettingStarted}
        />
        <Route
            path="/login"
            component={Login}
        />
        <Route
            path="/signup"
            component={Signup}
        />
    </Router>
);

export default AppRouter;
