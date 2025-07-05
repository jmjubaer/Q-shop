import type { TCartItem } from "../types";

export const addToCart = (product: Omit<TCartItem, "quantity">): void => {
    // Get existing cart from localStorage or default to []
    const cart: TCartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if item already exists by title (you can use id instead if available)
    const existingItemIndex = cart.findIndex(
        (item) => item.title === product.title
    );

    if (existingItemIndex !== -1) {
        // If item exists, increase its quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // If item doesn't exist, add it with quantity 1
        cart.push({ ...product, quantity: 1 });
    }

    // Save updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
};
