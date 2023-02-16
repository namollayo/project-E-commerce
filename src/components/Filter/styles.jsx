import styled from "styled-components";

export const FiltroHomeContainer = styled.div`
    width: 21.5rem;
    min-width: 21.5rem;
    background-color: var(--cute-pink);
    border-radius: 20px;
    height: 21.5rem;
    display: flex;
    padding: 2rem 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    align-items: center;
    align-content: flex-start;
    gap:0.75rem;
    .alert{
        color: var(--white-card);
        font-family: Inter, sans-serif;
        font-size: 12px;
        position: absolute;
        bottom:7.5rem;
        left: 1.5rem;
        :hover {
            color: var(--white-card);
        }
    }
`
export const StyledInput = styled.input`
    width: 50%;
    background-color: var(--white-card);
    border: none;
    padding-left: 1rem;
    padding-right: 0.75rem;
    height: 3rem;
    font-family: Inter, sans-serif;
    border-radius: 10px;
    color: gray;
    :focus{
        outline:none;
    }
    `
export const StyledInputDestination = styled.select`
    width: 98%;
    background-color: var(--white-card);
    border: none;
    height: 3rem;
    border-radius: 10px;
    color: gray;
    font-family: Inter, sans-serif;
    padding-left: 1rem;
    :focus{
        outline:none;
    }
    
    `
export const StyledInputPerson = styled.input`
    width: 44%;
    background-color: var(--white-card);
    border: none;
    height: 3rem;
    border-radius: 10px;
    color: gray;
    font-family: Inter, sans-serif;
    font-size: 12px;
    padding-left: 0.5rem;
    :focus{
        outline:none;
    }
    
    `
export const StyledSearchButton = styled.button`
    width: 80%;
    height: 2.75rem;
    font-size: large;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    border: none;
    margin: 3.75rem 10% 0 10%;
    border-radius: 10px;
    color: var(--white-card);
    font-family: Poppins,sans-serif;
    background-color: var(--purple-blue);
    :hover{
        color: rgba(232, 122, 161, 0.60);
        cursor: pointer;
    }
    :active{
        color: rgba(232, 122, 161);
    }
    `
export const FiltroCatalogueContainer = styled.div`
    width: 75rem;
    background-color: var(--cute-pink);
    border-radius: 1.25rem;
    height: 9rem;
    display: flex;
    padding: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    justify-content: flex-start;
    align-items: center;
    align-content: flex-start;
    gap:0.75rem;
        .alert{
        color: var(--white-card);
        font-family: Inter, sans-serif;
        font-size: 12px;
        position: absolute;
        bottom:2rem;
        right:20rem;
        :hover {
            color: var(--white-card);
        }
    }
        `
export const CatalogueStyledInput = styled.input`
    width: 30%;
    background-color: var(--white-card);
    border: none;
    padding-left: 1rem;
    padding-right: 0.75rem;
    height: 3rem;
    font-family: Inter, sans-serif;
    border-radius: 10px;
    color: gray;
    :focus{
        outline:none;
    }
    `
export const CatalogueStyledInputDestination = styled.select`
    width: 78%;
    background-color: var(--white-card);
    border: none;
    height: 3rem;
    border-radius: 10px;
    color: gray;
    font-family: Inter, sans-serif;
    padding-left: 1rem;
    :focus{
        outline:none;
    }
    

`
export const CatalogueStyledInputPerson = styled.input`
    width: 20%;
    background-color: var(--white-card);
    border: none;
    height: 3rem;
    border-radius: 10px;
    color: gray;
    font-family: Inter, sans-serif;
    font-size: 12px;
    padding-left: 0.5rem;
    margin-right: auto;
    :focus{
        outline:none;
    }

`
export const CatalogueStyledSearchButton = styled.button`
    width: 15%;
    height: 2.75rem;
    font-size: large;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    border: none;
    border-radius: 0.6rem;
    color: var(--white-card);
    font-family: Poppins,sans-serif;
    background-color: var(--purple-blue);
    margin-left: 22%;
    :hover{
        color: rgba(232, 122, 161, 0.60);
        cursor: pointer;
    }
    :active{
        color: rgba(232, 122, 161);
    }
`