import { CardArea, CardImage, CardTitle, ButtonCardHome, CardContent } from './stylesHome'
import { nameToBook } from '../../utils/utils'

export function CardHome({products,setFilterBookDestination}){
    
    return(
    <CardArea>
            <CardImage src={products.img} alt={products.name}/>
            <CardContent>
                <div>
                    <CardTitle> {products.name}</CardTitle>
                    <ButtonCardHome value={products.name} onClick={()=> nameToBook(products, setFilterBookDestination)} >Book Now</ButtonCardHome>
                </div>
                <span>Prices starting at <br/><b>$ {products.priceday + products.priceflight}</b></span>
            </CardContent>
    </CardArea>
       )
}