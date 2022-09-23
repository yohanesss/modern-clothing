import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../contexts/cart.context";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.util";
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isOpenCartDropdown } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          Modern<span>Clothing</span>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {!currentUser ? (
            <NavLink to="/auth">Sign In</NavLink>
          ) : (
            <NavLink as="span" to="/" onClick={signOutHandler}>
              Sign Out
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isOpenCartDropdown && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
