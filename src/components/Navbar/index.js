import React, {useState} from 'react';
import {NavBar, NavBarWrapper, NavLogo, LogoIcon, NavBarIcon, NavBarMenu, NavLinks} from './NavbarStyle';
import { FaConfluence, FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../Button/Button';


function Navbar() {

    const [click, setClick] = useState(false);
    const CloseMobile = () => setClick(false);

    const HandleClick = () => setClick(!click);

    return (
        <>
            <NavBar>
                <NavBarWrapper>
                    <NavLogo onClick={CloseMobile}>
                        WBLD
                        
                        <LogoIcon>
                            <FaConfluence />
                        </LogoIcon>
                    </NavLogo>

                    <NavBarIcon onClick={HandleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </NavBarIcon>

                    
                    <NavBarMenu>
                        <li className={click ? 'NavMenuActive' : 'NavMenu'}>
                            <NavLinks to="/" onClick={CloseMobile}>
                                HOME
                            </NavLinks>

                            <NavLinks to="/webdesign" onClick={CloseMobile}>
                                WEB DESIGN
                            </NavLinks>

                            <NavLinks to="/branding" onClick={CloseMobile}>
                                BRANDING
                            </NavLinks>

                            <NavLinks onClick={CloseMobile}>
                                <Button buttonStyle='btn--outline' buttonSize='btn--medium'>
                                    CONTACT
                                </Button>
                            </NavLinks>
                        </li>

                    </NavBarMenu>

                </NavBarWrapper>
            </NavBar>
        </>
    )
}

export default Navbar;
