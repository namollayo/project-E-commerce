import styled from "styled-components";

export const FilterSortSearchContainer = styled.div`
    width: 80%;
    min-height: 2.5rem;
    display: flex;
    gap:1rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    background-color: rgba(194, 194, 194, 0.4) ;
    border-radius: 2rem ;
    padding: 0.5rem;

    input,select, button {
        text-align: center;
        color: #707070;
        border: none;
        border-radius: 1rem ;
        height: 1.5rem;
        :focus{
            outline:none ;
        }     
    }

    button {
        background-color: rgba(194, 194, 194, 0.01);
    }
    
    input,select {
                background-color: rgba(194, 194, 194, 0.60);
            }

    select{
        padding: 0 1rem;
    }

`