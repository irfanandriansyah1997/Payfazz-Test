import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

/**
 * Pages Import
 */
import GettingStarted from '@/pages/getting-started';

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
    </Router>
);

export default AppRouter;
