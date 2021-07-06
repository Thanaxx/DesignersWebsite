import styled from "styled-components";
import BackgroundImage from '../../../src/images-src/coverbg.jpg';


export const Cover = styled.div`
    height: 90vh;
`;

export const CoverImage = styled.div`
    background: url(${BackgroundImage});
    background-position: center;
    background-size: cover;
    height: 90vh;
`;

export const CoverWrapper = styled.div`
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CoverTitle = styled.div`
    text-align: center;

    h1{
        font-size: 80px;
        font-weight: bolder;
        color: white;
        margin-top: 150px;

        @media screen and (max-width:760px){
            font-size: 60px;
        }
    }

    p{
        color: white;
        font-size: 30px;

        @media screen and (max-width:760px){
            font-size: 20px;
        }
    }
`;

export const CoverButton = styled.div`
    padding: 20px 0;

    Button{
        margin: 0px 10px;

        @media screen and (max-width:400px){
            display: flex;
            flex-direction: column;
            text-align: center;
        }
    }
`;
