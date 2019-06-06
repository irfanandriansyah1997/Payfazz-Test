import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

/**
 * Pages Import
 */
import GettingStarted from '@/pages/getting-started';
import Listing from '@/pages/listing';
import Login from '@/pages/login';
import Signup from '@/pages/signup';
import AuthHelper from '@/helper/auth.helper';
import Logout from '@/pages/logout';

const AppRouter = () => (
    <Router>
        <Route
            exact
            path="/"
            component={AuthHelper(
                GettingStarted,
                false,
                'Getting Started'
            )}
        />
        <Route
            path="/getting-started"
            component={AuthHelper(
                GettingStarted,
                false,
                'Getting Started'
            )}
        />
        <Route
            path="/listing"
            component={AuthHelper(
                Listing,
                true,
                'Product Page'
            )}
        />
        <Route
            path="/login"
            component={AuthHelper(
                Login,
                false,
                'Login Page'
            )}
        />
        <Route
            path="/logout"
            component={AuthHelper(
                Logout,
                true,
                'Logout'
            )}
        />
        <Route
            path="/signup"
            component={AuthHelper(
                Signup,
                false,
                'Register Page'
            )}
        />
    </Router>
);

export default AppRouter;
