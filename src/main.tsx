import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/page/home/HomePage.tsx";
import App from "./App.tsx";
import ProductDetails from "./components/page/product/ProductDetails.tsx";
import CartProvider from "./provider/CartProvider.tsx";
import { Toaster } from "sonner";

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
             <Toaster />
            <RouterProvider router={router} />
        </CartProvider>
    </StrictMode>
);
