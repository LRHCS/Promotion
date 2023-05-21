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
  border-top: 2px solid ${({ theme }) => theme.text};
  border-left: 2px solid ${({ theme }) => theme.text};
  border-right: 2px solid ${({ theme }) => theme.text};
  justify-content: center;
  text-align: center;
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
