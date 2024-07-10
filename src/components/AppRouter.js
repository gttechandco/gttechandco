// src/components/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from '../config/routes';
import BaseLayout from './layouts/BaseLaytout';

const AppRouter = () => (
    <Router>
        <BaseLayout>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
            </Routes>
        </BaseLayout>
    </Router>
);

export default AppRouter;
