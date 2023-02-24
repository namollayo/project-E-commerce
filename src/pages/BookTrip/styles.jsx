import styled from "styled-components";


export const ContainerBook = styled.div`
    background-color: var(--purple-blue);
    display: flex;
    width: 100vw;
    margin-top:14vh;
    justify-content: center;
    align-items: center;
    min-height: 72.60vh;
    font-family: Inter, sans-serif;
    p{
        font-size: 28px;
        color: var(--soft-black);
        width: 50%;
    }
    span{ 
        font-size: 16px;
        color: gray;
    }
`

export const Ticket = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    flex-direction: row;
    width: 75vw;
    min-height: 52vh;
    background-color: ${(props)=> props.productCart.length? "var(--white-card)" : "#cecece" };
    border-radius: 2.5rem;
    overflow: hidden;
    box-shadow: rgba(149, 157, 165, 0.1) 0px 6px 20px;
`

export const PinkLine= styled.div`
    width: 8%;
    min-height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--cute-pink);
    svg{
        width: 2.75rem;
    }
`

export const TicketImage = styled.img`
    width: 28%;
    min-height: 52vh;
    object-fit: cover;
    object-position: center;
    
`
export const TicketContent = styled.div`
    width: 64%;
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    line-height: 3.75rem;
    .datesTicket{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .buttonTicket{
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
    }
    .emptyAlert{
        margin: auto;
        margin-left: 9rem;
        color: #5e5e5e;
        width: 100%;
        text-align: center;        
    }
    .emptyAlert > u {
        color: #fc71a2;
        text-decoration: none;
        :hover{
            color: #fc9cbd;
            cursor: pointer;
            text-decoration: underline;
        }
        :active{
            color: #f886ae;
            text-decoration: none;
        }
    }

    
`

export const TicketButton = styled.button`
    background-color: var(--purple-blue);
    color: var(--soft-white);
    font-weight: 600;
    font-family: Poppins, sans-serif;
    font-size: 18px;
    border: none;
    width: 40%;
    border-radius: 1.25rem;
    height: 3.2rem;
    :hover{
        color: #fc9cbd;
        cursor:pointer;
    }
    :active{
        color: var(--cute-pink);
    }

`