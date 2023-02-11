import { CartCardArea, DetailsCartCard, ImgCartCard, TitleCartCard, ContentCartCard } from "./styles";

export function CartCard({cartProduct}){

    return(
        cartProduct.map(cartProduct =>
        <CartCardArea  key={cartProduct.id}>
            <ImgCartCard src={cartProduct.img}/>
            <ContentCartCard>
                <TitleCartCard>{cartProduct.name}</TitleCartCard>
                <DetailsCartCard><button>-</button> 00 Days <button>+</button><br/>
                <button>-</button> 00 Persons<button>+</button><br/>
                                {cartProduct.dates[0]} {cartProduct.dates[1]}<br/><strong>
                                $ 1235</strong>
                </DetailsCartCard>
            </ContentCartCard>
        </CartCardArea>
        
    ))
}