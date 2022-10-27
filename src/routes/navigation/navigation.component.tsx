import React, { Fragment, MouseEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import { selectIsOpenCartDropdown } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";
import { selectCurrentUser } from "../../store/user/user.selector";

// import { signOutUser } from "../../utils/firebase/firebase.util";
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isOpenCartDropdown = useSelector(selectIsOpenCartDropdown);

  const signOutHandler: MouseEventHandler<HTMLAnchorElement> = async () => {
    dispatch(signOutStart());
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
            <NavLink to="/" onClick={signOutHandler}>
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
