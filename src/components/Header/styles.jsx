import styled from "styled-components";

export const HeaderContainer = styled.header `
    background-color: var(--soft-white);
    width: 100%;
    display: flex;
    height: 14vh;
    align-items: center;
    justify-content:space-between;
    padding: 0 2rem 0 1rem;
    position:absolute;
    top: 0;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 8px;

`

export const Logo = styled.img `
    width: 14rem;
    cursor: pointer;
`
export const NavOptions = styled.h3 `
    font-family:Poppins, sans-serif;
    color: var(--soft-black);
    text-transform: uppercase;
    font-size: 22px;
    font-weight:400;
    :hover{
        color: rgba(232, 122, 161, 0.60);
        cursor: pointer;
    }
    :active{
        color: rgba(232, 122, 161);
    }
`

export const NavContainer = styled.div `
    display: flex;
    width: 35vw;
    justify-content: space-around;
    align-items: center;

`
export const CartIcon = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const SpanCart = styled.span`
    opacity: ${(props)=> props.productCart ? 1 : 0 };
    text-align: center;
    margin-left: 0.3rem;
    background-color: rgba(232, 122, 161, 0.60);
    width:1.5rem;
    border-radius: 100%;
`
