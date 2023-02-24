import { CartCard } from "../../components/CartCard/CartCard";
import { CartContainer, CartTitleMain, ButtonCart, ButtonCart2, CartTotalDivMain, ButtonMain, CardContainerCart, TotalPriceCartMain, EmptyText } from "./styles";

export function Cart({inCartProduct, setInCartProduct,setPageRoute}){

  const totalPrice = inCartProduct.length? inCartProduct.reduce((prevVal, inCartProduct)=> prevVal + (inCartProduct.amount*inCartProduct.nPerson*((inCartProduct.totalDays*inCartProduct.priceday)+inCartProduct.priceflight)), 0 ) : 0
    
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