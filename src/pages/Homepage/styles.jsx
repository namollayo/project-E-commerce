import styled from "styled-components";
import backgroundHome from '../../assets/backgroundhome.jpg'

export const HomeInfoContainer= styled.div`
    padding-top: 2rem;
    display: flex;
    gap: 2.5rem;
    flex-direction: column;
    margin-bottom: 5rem;
`

export const BackgroundImage = styled.div`
    margin-top: 14vh;
    width: 100%;
    height:75vh;
    display: flex;
    padding-left: 2rem;
    align-items: center;
    justify-content: flex-start;
    background-position: center;
    background-size: cover;
    background-image: linear-gradient(180deg, #00ade261 0%, #5762a3b2 90%),linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.30) 100%), url(${backgroundHome}); 
    .textHome{
        text-align: end;
        margin-left: 10rem;

    }
    p{
        font-family:'Major Mono Display', monospace;
        color: var(--soft-white);
        font-size:55px;
        :hover{
            color:rgb(255, 139, 180);
            cursor: default;
        }
    }
    h1{ 
        color: var(--soft-white);
        font-size:18px;
        font-weight: 500; 
        :hover{
            color:rgb(255, 139, 180);
            cursor: default;
        }
    }
`

export const StyledH2 = styled.h2`
    text-transform: uppercase;
    font-size: 48px;
    text-align: center;
    letter-spacing: 2px;
    span{color: var(--cute-pink);}

`

export const CardContainerHome = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-bottom: 1.5rem;
    
`
export const CardContainerCatalogue = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 2rem;
    
`

export const WhoWeAre = styled.div`
    width:100vw;
    height:50px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-around;
`
export const WhoWeAreText = styled.p`
    text-align: center;
    align-self: center;
    width:45%;
    padding-bottom: 1.25rem;
    color: rgb(39, 36, 44, 0.6);
`
export const WhoWeArePic = styled.img`
    width:60%;
    align-self: center;
    border-start-end-radius: 1rem;
    border-start-start-radius: 1rem;
    box-shadow: rgba(149, 157, 165, 0.15) 0px 8px 20px;
    :hover{
        box-shadow: rgba(255, 255, 255, 0.6) 0px 8px 24px;
    }
`

