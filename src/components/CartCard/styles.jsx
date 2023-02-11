import styled from "styled-components";

export const CartCardArea = styled.div`
    width: 90%;
    padding: 1.5rem 1.75rem;
    /* background-color: var(--white-card); */
    min-height: 12rem;
    height: 10rem;
    overflow: hidden;
    display: flex;
    flex-direction: row;    
    border-bottom: 0.5px #9494946c solid;
`
export const ImgCartCard = styled.img`
    width: 8rem;
    object-fit: cover;
    object-position:center;
    height: 8rem;
    border-radius: 1rem ;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`
export const ContentCartCard = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   justify-content: space-around;
   text-align: end;
   

`
export const TitleCartCard = styled.h3`
    font-size: 26px;
    
`
export const DetailsCartCard = styled.p`
   line-height: 18px;
   font-size: 14px;
   font-family: Inter;
   button{
       color: var(--cute-pink);
       border: none;
        :hover{
            cursor: pointer;
            color: var(--soft-dark);
        }
    }
`
