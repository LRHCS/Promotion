import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 94.5%;
  border-radius: 15px 15px 0px 0px;

  justify-content: center;
  text-align: center;

  box-shadow: 0px 0px 7.8px rgba(0, 0, 0, 0.008),
    0px 0px 17.2px rgba(0, 0, 0, 0.012), 0px 0px 28.8px rgba(0, 0, 0, 0.015),
    0px 0px 43.4px rgba(0, 0, 0, 0.018), 0px 0px 62.6px rgba(0, 0, 0, 0.02),
    0px 0px 88.6px rgba(0, 0, 0, 0.022), 0px 0px 125.7px rgba(0, 0, 0, 0.025),
    0px 0px 182.5px rgba(0, 0, 0, 0.028), 0px 0px 281.3px rgba(0, 0, 0, 0.032),
    0px 0px 500px rgba(0, 0, 0, 0.04);
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const NavItem = styled.li`
  margin: 0 40px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-size: 23px;

  &:hover {
    background-color: ${({ theme }) => theme.background};
  }

  &:active {
    background-color: ${({ theme }) => theme.background};
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <b>
            <NavLink to="/">Noten</NavLink>
          </b>
        </NavItem>
        <NavItem>
          <b>
            <NavLink to="/theme">Theme</NavLink>
          </b>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default NavBar;
