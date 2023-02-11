import { CartCard } from "../CartCard/CartCard";
import { CartArea, CartTitle, ButtonCartSide2, ButtonDiv, CartTotalDiv, TotalPriceCartCard, CartTitleDiv, ButtonCartSide } from "../../pages/Cart/styles";

export function CartSideBar({cartProduct}){
    
    return(
        <>
        <CartArea>
          <CartTitleDiv>
           <CartTitle>Cart</CartTitle>
          </CartTitleDiv>
          <CartCard cartProduct={cartProduct}/>
          <CartCard cartProduct={cartProduct}/>

          <CartTotalDiv>
            <TotalPriceCartCard> Total</TotalPriceCartCard>
            <TotalPriceCartCard> $ 1000 </TotalPriceCartCard>
          </CartTotalDiv>
          <ButtonDiv>
            <ButtonCartSide> View Basket</ButtonCartSide><br/>
            <ButtonCartSide2>Check Out</ButtonCartSide2>
          </ButtonDiv>


        </CartArea>
        </>
    )
}