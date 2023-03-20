import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Testing from "./components/Testing.jsx";
import Testing2 from "./components/Testing2.jsx";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Testing2 />,
        },
        {
            path: "/phaser",
            element: <Testing />,
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
export default App;