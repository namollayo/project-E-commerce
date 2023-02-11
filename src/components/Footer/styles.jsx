import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: var(--soft-black);
    height: 5.5rem;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        font-size: small;
        color: var(--soft-white);
        text-align: center;
    }
    a{
        text-decoration: none;
        color: var(--cute-pink);
    }
    svg{
        fill:var(--soft-white);
    }
    svg:hover{
        fill: var(--cute-pink);
    }
    .logoSocialMedia{
        display: flex;
        justify-content: space-between;
        width: 3rem;
    }

`
