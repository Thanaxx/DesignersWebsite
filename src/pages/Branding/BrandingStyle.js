import styled from "styled-components";

export const BrandingWrapper = styled.div`
    padding: 30px 100px;
    min-height: 100vh;

    @media screen and (max-width: 760px){
        padding: 30px 20px;
    }
`;

export const BrandingSearch = styled.div`

    h1{
        text-align: center;
        padding: 20px;
        color: #372800;

        @media screen and (max-width: 690px){
            font-size: 25px;
        }
    }
`;

export const SearchInput = styled.div`
    background-color: #F5EDED;
    text-align: center;
    padding: 8px 10px;
    width: 50%;
    display: flex;
    margin: auto;
    border-radius: 50px;

    @media screen and (max-width: 760px){
        width: 100%;
    }

    .searchIcon{
        font-size: 33px;
    }
    input{
        padding: 5px 10px;
        width: 100%;
        border: none;
        outline: none;
        background-color: #F5EDED;
        font-size: 16px;
        color: #372800;
        font-weight: bold;
    }

`;

export const BrandingList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Brands = styled.div`
    width: 25%;
    margin: auto;
    padding: 20px 10px;

    @media screen and (max-width: 760px){
        width: 50%;
    }
    
    img{
        width: 100%;
    }

    p{
        font-size: 17px;
        color: #85864D;
        font-weight: bolder;
    }

    h3{
        font-size: 14px;
        color: #898A5F;
        font-weight: lighter;
        font-weight: bold;
    }
`;