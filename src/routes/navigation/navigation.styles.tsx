import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  /* height: 70px; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  a {
    text-decoration: none;
    padding-left: 10px;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  border: 1px solid #2a2c2d;
  background-color: #2a2c2d;
  color: white;
  font-size: 2rem;
  width: fit-content;
  padding-left: 5px;
  span {
    padding: 0 5px;
    margin-left: 5px;
    background-color: white;
    color: #2a2c2d;
  }
  a {
    color: white;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: inherit;
`;

// .navigation {

//   a {
//     text-decoration: none;
//     padding-left: 10px;
//   }
//   .logo-container {
//     display: flex;
//     border: 1px solid #2A2C2D;
//     background-color: #2A2C2D;
//     color: white;
//     font-size: 2rem;
//     width: fit-content;
//     padding-left: 5px;
//     span {
//       padding: 0 5px;
//       margin-left: 5px;
//       background-color: white;
//       color: #2A2C2D;
//     }
//   }

//   .links-container {
//     width: 50%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;

//     .nav-link {
//       padding: 10px 15px;
//       cursor: pointer;
//       text-transform: uppercase;
//       color: inherit;
//     }
//   }
// }
