import styled from "styled-components";

export const CardArea = styled.div `
    background-color: var(--white-card);
    overflow: hidden;
    border-radius: 1rem;
    min-width: 15.75rem;
    width: 15.75rem;
    height: 18.25rem;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    :hover{
        transform: scale(1.05);
    }
`

export const CardImage = styled.img `
    object-fit: cover;
    object-position: center;
    width: 25.5rem; 
    height: 10.5rem; 
    box-shadow: rgba(149, 157, 165, 0.1) 0px 6px 20px;

`
export const CardTitle = styled.h3`
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 26px;
    color: var(--cute-pink);
`

export const CardContent = styled.div `
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0.25rem 0 0.5rem 0;
    flex-direction: column;

`
export const CardMainInfo = styled.div `
    display: flex;
    width: 92%;
    align-items: center;
    justify-content: space-between;
    margin:0;
    padding: 0;

`

export const CardPrice = styled.span `
    font-size: 20px;
    color: rgba(39, 36, 44, 0.8);

`
export const CardDescription = styled.div `
    font-family: Inter, sans-serif;
    width: 92%;
    font-size: 11px;
    color: rgba(39, 36, 44, 0.8);
    display: flex;
    justify-content: space-between;
    margin: -6px 0 -1px 8px;

    span{
        margin-top: -4px;
        width: 4.2rem;
        font-size: 11px;
        font-weight: 600;
        color: var(--cute-pink);

    }

`

export const ButtonCard = styled.button `
    font-family: Poppins,sans-serif;
    font-weight: 400;
    letter-spacing: 2px;
    width: 6.5rem;
    color: var(--soft-white);
    border: none;
    border-radius: 0.5rem;
    height: 1.75rem;
    background-color: var(--cute-pink);
    align-self: flex-end;
    margin-right: 0.75rem;
    :hover{
        color: rgb(249, 249, 249,0.6);
        cursor: pointer;
    }
    :active{
        color: rgba(94, 105, 172);
    }

`
