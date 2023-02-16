import { CartCard } from "../../components/CartCard/CartCard";
import { CartContainer, CartTitleMain, ButtonCart, ButtonCart2, CartTotalDivMain, ButtonMain, CardContainerCart, TotalPriceCartMain, EmptyText, CartTitleDiv } from "./styles";
import { CartSideBar } from '../../components/CartSidebar/CartSideBar'

export function Cart({productCart}){

    return(
        <>
        <CartContainer>
           <CartTitleMain>Shopping Cart</CartTitleMain>
            <CardContainerCart>
              <EmptyText productCart={productCart}> Your shopping cart is empty</EmptyText>
          <CartCard productCart={productCart}/>
          </CardContainerCart>
          <CartTotalDivMain>
            <TotalPriceCartMain> Total</TotalPriceCartMain>
            <TotalPriceCartMain> $ 1000 </TotalPriceCartMain>
          </CartTotalDivMain>
        <ButtonMain>
            <ButtonCart>Keep Purchasing</ButtonCart>
            <ButtonCart2>Check Out</ButtonCart2>
        </ButtonMain>
        </CartContainer>
        </>
    )
}