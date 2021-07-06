import styled from "styled-components";

export const Contacts = styled.div`
    min-height: 100vh;

    @media screen and (max-width:760px){
        min-height: 170vh;
    }
`;

export const ContactBg = styled.div`

    h1{
        text-align: center;
        color: white;
        font-size: 60px;
        padding: 30px 0 0 0;
        color: #63643B;
    }

    p{
        text-align: center;
        color: white;
        font-size: 25px;
        color: #63643B;
    }
`;

export const ContactCards = styled.div`
        display: flex;
        flex-direction: column;
`;

export const ContactType = styled.div`
    margin: auto;
    text-align: center;
    background-color: white;
    padding: 40px 20px;
    width: 100%;
    box-shadow: 2px 2px 2px #D8D8D8;
    font-size: 16px;
    line-height: 30px;

    p{
        font-weight: bold;

        :nth-child(4){
            margin-top: 20px;
        }

        :nth-child(2){
            font-weight: bolder;
            font-size: 15px;
            color: #63643B;
        }
    }

    Button{
        margin-top: 20px;
    }
`;




