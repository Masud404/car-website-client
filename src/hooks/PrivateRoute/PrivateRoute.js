import React from 'react';
import useAuth from '../useAuth/useAuth';
import { Route, Redirect } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

// private route
const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div className="text-center"><Spinner animation="border" variant="primary" /></div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ?
                    children
                    :
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />

            }
        >

        </Route>
    );
};

export default PrivateRoute;