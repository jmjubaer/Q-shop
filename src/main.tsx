import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CartProvider from "./context/CartContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/page/home/HomePage.tsx";
import App from "./App.tsx";
import ProductDetails from "./components/page/product/ProductDetails.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "product/:id",
                element: <ProductDetails />,
            },
        ],
    },
]);
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    </StrictMode>
);
