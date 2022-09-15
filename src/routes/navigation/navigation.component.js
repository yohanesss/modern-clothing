import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.util";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <div className="navigation">
        <Link to="/">
          <div className="logo-container" to="/">
            Modern<span>Clothing</span>
          </div>
        </Link>
        <div className="links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {!currentUser ? (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          ) : (
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
