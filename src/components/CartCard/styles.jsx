import styled from "styled-components";

export const CartCardArea = styled.div`
    width: 100%;
    padding: 1.5rem 1.75rem;
    min-height: 12rem;
    height: 10rem;
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
    position: relative;
        button{
        background-color: transparent;
        margin-right: 20px ;
        font-family: Poppins, sans-serif;
        font-size:24px;
        color:  #9494946c ;
        border: none;
            :hover{
                cursor: pointer;
                color: var(--cute-pink);
            }
        }
        #removeUnit{
                position: absolute;
                right: -50px;
                top: 0.25rem;
            }
    
`
export const DetailsCartCard = styled.p`
    position: relative;
    line-height: 18px;
    font-size: 14px;
    font-family: Inter;
    button{
        background-color: transparent;
        color: var(--cute-pink);
        border: none;
            :hover{
                cursor: pointer;
                color: var(--soft-dark);
            }
        }
`

export const LateralOptions = styled.div`
    position: absolute;
    right: -60px;
    display: flex;
    height: inherit;
    flex-direction: column;
    justify-content: center;
    button{
        background-color: transparent;
        font-family: Poppins, sans-serif;
        font-size:24px;
        color:  #9494946c ;
        border: none;
            :hover{
                cursor: pointer;
                color: var(--cute-pink);
            }
        }
    
`

