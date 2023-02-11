import styled from "styled-components";

export const CardArea = styled.div `
    background-color: var(--white-card);
    overflow: hidden;
    border-radius: 1rem;
    min-width: 15.75rem;
    width: 15.75rem;
    height: 14rem;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    :hover{
        transform: scale(1.2);
    }
`

export const CardImage = styled.img `
    object-fit: cover;
    object-position: 65% ;
    width: 25.5rem; 
    height: 10rem; 
    box-shadow: rgba(149, 157, 165, 0.1) 0px 6px 20px;

`
export const CardTitle = styled.h3`
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 22px;
    color: var(--cute-pink);
`

export const CardContent = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2px 0.75rem 0rem 0.75rem;

    div {
        display: flex;
        align-items: center;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }
    span {
        margin-left: 2px;
        margin-top:-0.3rem;
        /* text-align:end; */
        font-size: 11px;
        line-height: 14px;
    }

`

export const CardPrice = styled.span `
    font-size: 20px;
    color: rgba(39, 36, 44, 0.8);

`

export const ButtonCardHome = styled.button `
    font-family: Poppins,sans-serif;
    font-weight: 400;
    letter-spacing: 2px;
    width: 6.5rem;
    border: none;
    color: var(--soft-white);
    border-radius: 0.5rem;
    height: 1.75rem;
    background-color: var(--cute-pink);
    :hover{
        color: rgb(249, 249, 249,0.6);
        cursor: pointer;
    }
    :active{
        color: rgba(94, 105, 172);
    }

`
