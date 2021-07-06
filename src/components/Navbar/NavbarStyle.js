import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavBar = styled.nav`
    background-color: white;
    height: 80px;
    position: sticky;
    top: 0;
    
`;

export const NavBarWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
`;

export const NavLogo = styled(Link)`
    text-decoration: none;
    font-size: 30px;
    color: #85864D;
    font-family: 'Rosarivo', serif;
    width: 30%;
    margin-left: 50px;

    @media screen and (max-width: 760px){
        width: 50%;
    }
`;

export const LogoIcon = styled(Link)`
    text-decoration: none;
    font-size: 30px;
    color: #4D4E3C;
    padding: 0px 4px;
    font-size: 25px;
`;

export const NavBarIcon = styled.div`
    text-decoration: none;
    font-size: 30px;
    color: #4D4E3C;
    font-size: 33px;
    cursor: pointer;
    display: none;
    position: absolute;
    right: 40px;
    top: 20px;

    @media screen and (max-width: 760px){
        display: block;
    }
`;

export const NavBarMenu = styled.div`
    width: 70%;
    text-align: right;
    margin-right: 50px;

    li{
        list-style-type: none;
    }

    @media screen and (max-width: 760px){

        .NavMenuActive{
            background-color: white;
            height: 100vh;
            width: 100%;
            position: fixed;
            top: 80px;
            left: 0;
            z-index: 1;
            
        }
        .NavMenu{
            display: none;
        }

        Button{
            
        }
    }
`;

export const NavLinks = styled(Link)`
    margin: 0px 20px;
    padding: 0px 5px;
    color: #85864D;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;

    @media screen and (max-width: 760px){
        display: table;
        margin-top: 80px;
        width: 100%;
        text-align: center;
        
    }
`;


