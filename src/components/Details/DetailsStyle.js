import styled from "styled-components";
import { Link } from "react-router-dom";

export const DetailsWrapper = styled.div`
    min-height: 80vh;
    padding: 100px;

    @media screen and (max-width:760px){
        padding: 70px 20px;
    }
`;

export const DetailsName = styled.div`
    display: flex;

    @media screen and (max-width:760px){
        flex-direction: column;
    }

`;

export const Cards = styled(Link)`
    background-color: #8A8A68;
    margin: 10px;
    padding: 40px 20px;
    text-align: center;
    border-radius: 3px;
    text-decoration: none;

    p{
        color: white;
        padding-top: 10px;
    }

    h2{
        padding-top: 20px;
        font-family: 'Rosarivo', serif;
        color: #63643B;
        font-weight: lighter;
    }
`;