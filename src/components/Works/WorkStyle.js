import styled from "styled-components";

export const Work = styled.div`
    padding: 50px 100px;
    min-height: 100vh;

    @media screen and (max-width: 760px){
        padding: 50px 20px;
    }
`;

export const WorkWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 760px){
        flex-direction: column;
    }
`;


export const WorkImage = styled.div`
    flex: 1;
    margin: 10px;
    img{
        width: 100%;
        height: 500px;
    }
`;


export const WorkDescription = styled.div`
    flex: 1;
    margin: auto;
    padding: 0px 20px;

    @media screen and (max-width: 760px){
        padding: 0px;
    }

    h1{
        font-size: 30px;
    }
    p{
        font-size: 18px;
        padding: 10px 0;
        text-align: justify;
    }
    Button{
        margin-top: 10px;
        border: 1px solid #85864D;
        background-color: white;
        color: #85864D;

        :hover{
            border: 1px solid #85864D;
            background-color: #85864D;
            color: white;
        }
    }
`;