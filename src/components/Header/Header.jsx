import { changeRouteCatalogue, changeRouteHome, changeRouteBook, changeRouteCart } from '../../utils/utils'
import { Icon }  from './Icon'
import { HeaderContainer, SpanCart, NavContainer, NavOptions, Logo, CartIcon } from './styles'




export function Header({logo, setPageRoute, productCart}){


    return (
        <>
            <HeaderContainer> 
            <Logo onClick={()=>{changeRouteHome(setPageRoute)}} src={logo}/>
            <NavContainer>
                <NavOptions onClick={()=>{changeRouteHome(setPageRoute)}}>Home</NavOptions>
                <NavOptions onClick={()=>{changeRouteCatalogue(setPageRoute)}}>Catalogue</NavOptions> 
                <NavOptions onClick={()=>{changeRouteBook(setPageRoute)}}> book trip </NavOptions>   
                <CartIcon onClick={()=>{changeRouteCart(setPageRoute)}} >
                    <Icon />
                    <SpanCart productCart={productCart}> {productCart.reduce((prevVal, product)=> prevVal + product.amount, 0)} </SpanCart>
                </CartIcon>
            
            
            </NavContainer>
            </HeaderContainer>
        </>
    )
}