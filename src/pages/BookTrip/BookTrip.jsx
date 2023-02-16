import { AirplaneIcon } from './airplaneIcon';
import {ContainerBook, Ticket, PinkLine, TicketContent, TicketImage, TicketButton} from './styles'


export function BookTrip({productCart}) {

    return(<>
    <ContainerBook>
        <Ticket>
            <PinkLine>
                <AirplaneIcon/>
            </PinkLine>
            <TicketImage src={productCart[0].img}/>
            <TicketContent>
            <div className='textTicket'>
                <p><strong>{productCart[0].name}</strong> <span>Destination</span>
                </p>
                <div className='datesTicket'><p> {productCart[0].dates[0]} <span> Departure Date</span>
                </p>
                <p>{productCart[0].dates[1]} <span> Return Date</span>
                </p></div>
                <p>{productCart[0].priceday} <span>Person(s)</span>
                </p>
                <p>{productCart[0].priceday + productCart[0].priceflight} <span>Total</span>
                </p>
            <div className='buttonTicket'><TicketButton>Reserve</TicketButton></div>
            </div>
            </TicketContent>            
            
        </Ticket>
    </ContainerBook>
    </>)
    
}