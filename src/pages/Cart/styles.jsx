import styled from "styled-components";

const OPACIDADE_ZERO = 0;
const OPACIDADE_UM = 0;

export const CartArea = styled.div`
    margin-top: 14vh;
    overflow-y: scroll;
    width: 28rem;    
    display:flex;
    flex-direction: column;
    min-height: 30rem;
    max-height:30rem;
    padding-bottom: 2rem;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    box-shadow: rgba(149, 157, 165, 0.15) 0px 8px 20px;
`
export const CartContainer = styled.div`
    margin-top: 14vh;
    width: 100%;    
    display:flex;
    padding-bottom: 4rem;
    flex-direction: column;
    min-height: 70vh;
    display: flex;
    align-items: center;
`
export const CardContainerCart = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transform: scale(1.12);
    width: 65%;
`

export const EmptyText = styled.span`
    opacity: ${(props)=> props.productCart.length? 0 : 1 };
`

export const CartTitleMain = styled.h2`
    font-size: 38px;
    text-transform: uppercase;
    padding: 2rem 0 ;
    color: var(--cute-pink);

`
export const CartTitle = styled.h2`
    text-transform: uppercase;
    color: var(--soft-black);

`
export const CartTitleDiv = styled.div`
    display: flex;
    /* padding-left: 1rem; */
    align-items: center;
    width: 100%;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid rgba(88, 88, 88, 0.2);
    
`

export const TotalPriceCartMain = styled.h4`
    font-size: 36px;
    
`
export const TotalPriceCartCard = styled.h4`
    font-size: 28px;
    
`
export const CartTotalDiv = styled.div`
    display: flex;
    color: var(--soft-black);
    padding: 1rem 1.5rem;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 20px;
    
`
export const CartTotalDivMain = styled.div`
    display: flex;
    color: var(--soft-black);
    padding: 5rem 0;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    font-size: 20px;
    
`
export const CartTotalCart = styled.div`
    display: flex;
    color: var(--soft-black);
    padding: 1rem 1.5rem;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 20px;
    
`
export const ButtonMain = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`
export const ButtonDiv = styled.div`

    display: flex;
    width: 100%;
    justify-content:center;
    gap:1px;

`
export const ButtonCart = styled.button`
    font-family: Poppins, sans-serif;
    text-transform: uppercase;
    letter-spacing: 6px;
    font-weight: 700;
    font-size: 18px;
    width: 50%;
    height: 3rem;
    color: var(--cute-pink);
    border: solid 4px var(--cute-pink);
    :hover{
        color: var(--white-card);
        background-color: var(--cute-pink);
        border: none;
        cursor:pointer;
    }

`
export const ButtonCart2 = styled.button`
    font-family: Poppins, sans-serif;
    text-transform: uppercase;
    letter-spacing: 6px;
    font-size: 18px;
    font-weight: 700;
    color: var(--white-card);
    background-color: var(--cute-pink);
    border: none;
    width: 50%;
    height: 3rem;
    :hover{
        background-color: var(--white-card);
        color: var(--cute-pink);
        border: solid 4px var(--cute-pink);
        cursor:pointer;
    }
`
export const ButtonCartSide = styled.button`
    font-family: Poppins, sans-serif;
    text-transform: uppercase;
    letter-spacing: 6px;
    font-size: 15px;
    font-weight: 700;
    color: var(--cute-pink);
    border: solid 4px var(--cute-pink);
    width: 48%;
    height: 3rem;
    :hover{
        color: var(--white-card);
        background-color: var(--cute-pink);
        border: none;
        cursor:pointer;
    }
`
export const ButtonCartSide2 = styled.button`
    font-family: Poppins, sans-serif;
    text-transform: uppercase;
    letter-spacing: 6px;
    font-weight: 700;
    color: var(--white-card);
    background-color: var(--cute-pink);
    font-size: 15px;
    width: 48%;
    height: 3rem;
    border: none;
    :hover{
        background-color: var(--white-card);
        color: var(--cute-pink);
        border: solid 4px var(--cute-pink);
        cursor:pointer;
    }
`