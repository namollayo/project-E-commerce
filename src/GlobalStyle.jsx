import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --soft-white: #F4F2F7 ;
        --white-card: #F9F9F9 ;
        --soft-black: #27242C;
        --cute-pink: #E87AA1;
        --purple-blue: #5E68AC;

        font-family: Inter, Helvetica, sans-serif;
        line-height: 1.5;
        font-weight: 400;

        color: #27242C;
        background-color: #F4F2F7;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }


    h1,h2,h3 {
        font-family: 'Poppins', sans-serif;
    }


    span, p {
        font-family: 'Inter', sans-serif;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    
    .carrinhoImg{
        width: 1.6rem;
        fill: #27242C
    }
    .carrinhoImg:hover  {
        fill: rgba(232, 122, 161, 0.60);
        cursor: pointer;
    }
    .carrinhoImg:active {
        fill: rgba(232, 122, 161);
    }

`