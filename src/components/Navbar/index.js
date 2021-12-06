import React from 'react';
import { FaBars } from 'react-icons/fa';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo,
    NavImg, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn, 
    NavBtnRoute } from './NavBarElements';
import logo from '../../images/21st_century_pages.png';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavImg src={logo}/>
                        Pages
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Services</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnRoute to='/contact'>Contact Us!</NavBtnRoute>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
