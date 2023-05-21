import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 95%;
  border-radius: 15px 15px 0px 0px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-size: 20px;
  font-weight: 500px;
  &:hover {
    background-color: ${({ theme }) => theme.background};
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/">Noten</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/theme">Theme</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
