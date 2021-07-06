import styled from "styled-components";
import { Link } from "react-router-dom";

export const Service = styled.div`
    min-height: 100vh;
    padding: 50px 100px;

    @media screen and (max-width:760px){
        padding: 50px 20px;
    }
`;

export const ServiceHeading = styled.div`
    text-align: center;
    padding: 20px 0;

    h1{
        font-size: 55px;
        color: #85864D;

        @media screen and (max-width:760px){
            font-size: 45px;
        }
        
    }
    p{
        font-size: 25px;
        color: #85864D;

        @media screen and (max-width:760px){
            font-size: 18px;
        }
    }
`;

export const ServiceName = styled.div`
    display: flex;

    @media screen and (max-width:760px){
        flex-direction: column;

    }
    
`;

export const ServiceImageLink = styled(Link)`
    margin: auto;
    text-decoration: none;
    margin-bottom: 10px;

    img{
        width: 100%;
        padding: 15px 10px;
    }
    p{
        text-align: center;
        font-size: 25px;
        color: #85864D;
        font-style: italic;
        font-weight: bolder;
    }
`;

