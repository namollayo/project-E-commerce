import { CardArea, CardImage, CardTitle, ButtonCardHome, CardContent, } from './stylesHome'

export function CardHome({product}){
    return(
        <CardArea>
            <CardImage src={product.img} alt={product.name}/>
            <CardContent>
                <div>
                    <CardTitle> {product.name}</CardTitle>
                    <ButtonCardHome>Book Now</ButtonCardHome>
                </div>
                <span>Prices starting at <br/><b>$ {product.priceday + product.priceflight}</b></span>
            </CardContent>
        </CardArea>
    )
}