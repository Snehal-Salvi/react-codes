// Step 1: Create a Protected Route Component
// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            element={isAuthenticated ? <Component /> : <Navigate to="/login" />}
        />
    );
};

export default ProtectedRoute;

// Step 2: Use the Protected Route in Your App

// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login login={login} />} />
                <ProtectedRoute path="/dashboard" component={Dashboard} isAuthenticated={isAuthenticated} />
            </Routes>
        </Router>
    );
};

export default App;
