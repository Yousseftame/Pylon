import React from 'react'
import { createBrowserRouter } from "react-router-dom";

import NotFound from '../pages/NotFound/NotFound'
import AdminLayOut from '../layouts/AdminLayOut';
import Home from '../pages/Home/Home';

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <AdminLayOut />,
        errorElement: <NotFound />,
        children: [
            { element: <Home />, index: true },
            {element: <Home/>, path: "home" },
        

  ],
},



])
