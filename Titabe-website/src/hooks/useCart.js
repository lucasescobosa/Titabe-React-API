import { useContext } from "react";
import { CartContext } from "../components/CartContext.jsx";

export const useCart = () => {
    const cart = useContext(CartContext)
    return cart
}