import { CartCard } from "../../components/CartCard/CartCard";
import { CartContainer, CartTitleMain, ButtonCart, ButtonCart2, CartTotalDivMain, ButtonMain, CardContainerCart, TotalPriceCartMain, EmptyText, CartTitleDiv } from "./styles";
import { CartSideBar } from '../../components/CartSidebar/CartSideBar'

export function Cart({inCartProduct, setInCartProduct,setPageRoute}){

  const totalPrice = inCartProduct.reduce((prevVal, inCartProduct)=> prevVal + (inCartProduct.amount*inCartProduct.nPerson*((inCartProduct.totalDays*inCartProduct.priceday)+inCartProduct.priceflight)), 0 )
    
  return(
        <>
        <CartContainer>
           <CartTitleMain>Shopping Cart</CartTitleMain>
            <CardContainerCart>
              { inCartProduct.length? (<CartCard inCartProduct={inCartProduct} setInCartProduct={setInCartProduct}/>) :
              (<EmptyText inCartProduct={inCartProduct}> Your shopping cart is empty</EmptyText>) }
          </CardContainerCart>
          <CartTotalDivMain>
            <TotalPriceCartMain> Total</TotalPriceCartMain>
            <TotalPriceCartMain> $ {totalPrice} </TotalPriceCartMain>
          </CartTotalDivMain>
        <ButtonMain>
            <ButtonCart onClick={()=>{setPageRoute(1)}}>Keep Purchasing</ButtonCart>
            <ButtonCart2>Check Out</ButtonCart2>
        </ButtonMain>
        </CartContainer>
        </>
    )
}