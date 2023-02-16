import styled from "styled-components";

export const FilterSortSearchContainer = styled.div`
    width: 80%;
    min-height: 2.5rem;
    display: flex;
    gap:1rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    background-color: var(--purple-blue) ;
    border-radius: 0.5rem ;
    padding: 0.5rem;

    input, select, button {
        text-align: center;
        color: #8f8e8e;
        border: none;
        border-radius: 0.75rem ;
        height: 1.5rem;
        ::placeholder{
            color: var( #8f8e8e);
        }
        :focus{
            outline:none ;
        }     
    }

    button {
        color: var(--cute-pink);
        background-color: rgba(194, 194, 194, 0.01);
        :hover{cursor:pointer}
    }
    
    input,select {
                background-color: var(--white-card);
            }

    select{
        padding: 0 1rem;
    }

`