// import { seedData } from '@lib/db/seeders';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './router';

export default function App() {
    // seedData();
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}