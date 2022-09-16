import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems, setOpenCartDropdown } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutPage = () => {
    navigate("/checkout");
    setOpenCartDropdown(false);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem product={cartItem} key={cartItem.id} />
        ))}
      </div>
      <Button onClick={goToCheckoutPage}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
