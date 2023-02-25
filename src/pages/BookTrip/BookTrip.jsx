import { AirplaneIcon } from './AirplaneIcon';
import {ContainerBook, Ticket, PinkLine, TicketContent, TicketImage, TicketButton} from './styles'
import { formatDate, sendTripToCart } from '../../utils/utils'


export function BookTrip({productCart, setProductCart, inCartProduct , setInCartProduct, setPageRoute}) {
    
    return(<>
    <ContainerBook>
    {productCart.length? (<Ticket productCart={productCart.length}>
            <PinkLine>
                <AirplaneIcon/>
            </PinkLine>
           <TicketImage src={productCart[0].img}/>
            <TicketContent>
            <div className='textTicket'>
                <p><strong>{productCart[0].name}</strong> <span>Destination</span>
                </p>
                <div className='datesTicket'><p> {formatDate(productCart[0].dates[0])} <span> Departure Date</span>
                </p>
                <p>{formatDate(productCart[0].dates[1])} <span> Return Date</span>
                </p></div>
                <p>{productCart[0].nPerson} <span>Person(s)</span>
                </p>
                <p>${((productCart[0].priceday * productCart[0].totalDays) + productCart[0].priceflight)*productCart[0].nPerson} <span>Total</span>
                </p>
            <div className='buttonTicket' onClick={()=>{sendTripToCart(productCart, setProductCart, inCartProduct , setInCartProduct, setPageRoute)}}><TicketButton>Reserve</TicketButton></div>
            </div>
            </TicketContent>
        </Ticket>) : (<Ticket productCart={productCart}>
            <PinkLine>
                <AirplaneIcon/>
            </PinkLine>
            <TicketContent>
                <p className="emptyAlert">Please choose your destination from our <u onClick={()=>{setPageRoute(1)}}>catalogue</u></p> 
            </TicketContent>
            </Ticket>)}
    </ContainerBook>
    </>)
    
}