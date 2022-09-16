import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems, setOpenCartDropdown } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem product={cartItem} key={cartItem.id} />
        ))}
      </div>
      <div>
        <Link
          to="/checkout"
          onClick={() => setOpenCartDropdown(false)}
          style={{ display: "block" }}
        >
          <Button>GO TO CHECKOUT</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartDropdown;
