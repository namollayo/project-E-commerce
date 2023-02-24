import { CartCardArea, DetailsCartCard, ImgCartCard, TitleCartCard, ContentCartCard, LateralOptions} from "./styles";
import { formatDate, addPerson, removePerson, removeItem, addUnit, removeUnit } from '../../utils/utils'

export function CartCard({inCartProduct, setInCartProduct}){
    return(
        inCartProduct.map( cartProduct => 
               <CartCardArea  key={cartProduct.id}>
                    <ImgCartCard src={cartProduct.img}/>
                    <ContentCartCard>
                        {cartProduct.amount === 1? 
                        <TitleCartCard>
                            <button onClick={()=>{addUnit(cartProduct, inCartProduct, setInCartProduct)}}>+</button>
                            {cartProduct.name}</TitleCartCard>:
                        <TitleCartCard>
                            <button onClick={()=>{addUnit(cartProduct, inCartProduct, setInCartProduct)}}>+</button>
                            {cartProduct.amount}x {cartProduct.name} <button id="removeUnit"onClick={()=>{removeUnit(cartProduct, inCartProduct, setInCartProduct)}}> - </button></TitleCartCard> }
                        <DetailsCartCard> {cartProduct.totalDays} Night(s) <br/>
                        <button onClick={()=>{removePerson(cartProduct, inCartProduct, setInCartProduct)}}>-</button> {cartProduct.nPerson} Person(s) <button onClick={()=>{addPerson(cartProduct, inCartProduct, setInCartProduct)}}>+</button><br/>
                                        {formatDate(cartProduct.dates[0])} {formatDate(cartProduct.dates[1])}<br/><strong>
                                        $ {cartProduct.amount*cartProduct.nPerson*((cartProduct.totalDays*cartProduct.priceday)+cartProduct.priceflight)}</strong>
                        </DetailsCartCard>
                    </ContentCartCard>
                    <LateralOptions>
                        <button onClick={()=>{removeItem(cartProduct, inCartProduct, setInCartProduct)}}>X</button>
                    </LateralOptions>       
                </CartCardArea>
            )
        
    )
}