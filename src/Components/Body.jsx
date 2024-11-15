import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login';
import Browse from './Browse';
function Body() {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login></Login>
        },
        {
            path: '/browse',
            element: <Browse></Browse>
        }
    ]);
    return (
        <div>
            <RouterProvider router={appRouter}>


            </RouterProvider>

        </div>
    )
}

export default Body
