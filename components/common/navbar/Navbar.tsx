import React, { useState } from 'react';
import styled              from 'styled-components';
import {NavLink, BrowserRouter as Router}     from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavItem {
    name: string;
    route: string;
}

const navItems: NavItem[] = [
    { name: 'Personal Information', route: '/personal' },
    { name: 'Employment Details', route: '/employment' },
    { name: 'Performance', route: '/performance' },
    { name: 'Skills and Qualifications', route: '/skills' },
    { name: 'Attendance', route: '/attendance' },
    { name: 'Payroll', route: '/payroll' },
    { name: 'Documents', route: '/documents' },
    { name: 'Tasks', route: '/tasks' },
    { name: 'Training', route: '/training' },
    { name: 'Notes', route: '/notes' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Router>
            <Nav>
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </Hamburger>
                <Menu isOpen={isOpen}>
                    {navItems.map((item, index) => (
                        <MenuItem key={index}>
                            <StyledLink to={item.route} onClick={() => setIsOpen(false)}>
                                {item.name}
                            </StyledLink>
                        </MenuItem>
                    ))}
                </Menu>
            </Nav>
        </Router>
    );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background-color: #333579;
  color: white;
  position: static;
  top: 0px;
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: whitesmoke;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-size: large;
  font-weight: 500;
  &.active {
    color: #ff6347; // Change color when active
  }
`;
const Hamburger = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
const Menu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; 
  justify-content: center; 
  align-items: center;
  justify-content: space-evenly;
  padding: 0.5rem;
  flex-direction: column;
  width: 80%;
  position: absolute;
  top: 15%;
  text-decoration: none;
  background-color: #333579; 
  color: whitesmoke;
  z-index: 1000;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); // Shadow effect
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 2s ease-in-out;

  @media (min-width: 769px) {
    display: flex; 
    transform: translateX(0);
    position: relative;
    background-color: transparent;
    flex-direction: row;
  }
`;

const MenuItem = styled.div`
  padding: 0.5rem;

  @media (min-width: 769px) {
    padding: 0;
    margin-right: 1rem;
  }
`;