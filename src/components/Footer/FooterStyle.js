import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
    background-color: #4D4E3C;
    min-height: auto;
    padding: 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
    p{
        font-weight: bold;
        font-size: 18px;
        color: white;
        padding: 3px 0;
    }

    @media screen and (max-width: 760px){
        padding: 50px 10px;
    }
`;

export const FooterForm = styled.form`
    margin: 5px 0;
     
     input{
         border: none;
         background-color: white;
         color: #372800;
         padding: 8px 10px;
         margin: 0px 5px;
         outline: none;
     }
     button{
        padding: 8px 10px;
        background-color: transparent;
        border: 1px solid white;
        color: white;
        cursor: pointer;

        :hover{
            background-color: white;
            color: #4D4E3C;
            font-weight: bold;
        }
     }
`;

export const FooterLinks = styled.div`
        padding: 10px 0;
`;

export const LinkName = styled(Link)`
        text-decoration: none;
        color: white;
        margin: 0px 10px;
`;

export const FooterPatent = styled.h2`
    color: white;
    font-size: 16px;
    font-weight: lighter;
`;

export const FooterCnd = styled.p`
    padding: 10px 0;
`;

export const LinkCnd = styled(Link)`
        text-decoration: none;
        color: white;
        margin: 0px 10px;
        font-weight: lighter;
        font-size: 18px;
`;
