import { CardArea, CardImage, CardTitle, ButtonCard, CardContent, CardMainInfo, CardDescription, CardPrice } from './styles'

export function Card({product}){
    const days = 4
    return(
        product.map(product=> <CardArea key={product.id}>
        <CardImage src={product.img} alt={product.name}/>
            <CardContent>
                <CardMainInfo>
                <CardTitle> {product.name}</CardTitle> <CardPrice>$ {(product.priceflight + (product.priceday * days))}</CardPrice>
                </CardMainInfo>
                <CardDescription><p>04 days | per person <br/>
                    Ticket: $ {product.priceflight} <br/>
                    Price per day: $ {product.priceday}</p>             
                    <span>prices from</span>
                </CardDescription>
                <ButtonCard>Book Now</ButtonCard>
            </CardContent>
        </CardArea>
    ))
}