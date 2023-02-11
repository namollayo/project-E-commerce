import { CartCard } from "../../components/CartCard/CartCard";
import { CartContainer, CartTitleMain, ButtonCart, ButtonCart2, CartTotalDivMain, ButtonMain, CardContainerCart, TotalPriceCartMain, CartTitleDiv } from "./styles";
import { CartSideBar } from '../../components/CartSidebar/CartSideBar'

export function Cart({cartProduct}){
    
    return(
        <>
        <CartContainer>
           <CartTitleMain>Shopping Cart</CartTitleMain>
            <CardContainerCart>
              <p className="empty"cartProduct={cartProduct}>Your shopping cart is empty</p>
          <CartCard cartProduct={cartProduct}/>
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