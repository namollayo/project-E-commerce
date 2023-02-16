import { CartCardArea, DetailsCartCard, ImgCartCard, TitleCartCard, ContentCartCard } from "./styles";

export function CartCard({productCart}){

    return(
        productCart.map(productCart =>
        <CartCardArea  key={productCart.id}>
            <ImgCartCard src={productCart.img}/>
            <ContentCartCard>
                <TitleCartCard>{productCart.name}</TitleCartCard>
                <DetailsCartCard><button>-</button> 00 Days <button>+</button><br/>
                <button>-</button> 00 Persons<button>+</button><br/>
                                {productCart.dates[0]} {productCart.dates[1]}<br/><strong>
                                $ 1235</strong>
                </DetailsCartCard>
            </ContentCartCard>
        </CartCardArea>
        
    ))
}