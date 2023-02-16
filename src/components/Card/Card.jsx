import { CardArea, CardImage, CardTitle, ButtonCard, CardContent, CardMainInfo, CardDescription, CardPrice } from './styles'
// import { nameToBook } from '../../utils/RoutesFunctions'


export function Card(props){
    const {products, nameToBook} = props
    const nights = 1
    return(
        products.length === 0 ? <span> Destination not found </span> :
        products.map(product=> <CardArea key={product.id}>
        <CardImage src={product.img} />
            <CardContent>
                <CardMainInfo>
                <CardTitle> {product.name}</CardTitle> <CardPrice>$ {(product.priceflight + (product.priceday * nights))}</CardPrice>
                </CardMainInfo>
                <CardDescription><p>01 night | per person <br/>
                    Ticket: $ {product.priceflight} <br/>
                    Price per night: $ {product.priceday}</p>             
                    <span>prices from</span>
                </CardDescription>
                <ButtonCard  onClick={()=> nameToBook(product)}>Book Now</ButtonCard>
            </CardContent>
        </CardArea>
    ))
}