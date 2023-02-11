import { changeRouteCatalogue, changeRouteHome, changeRouteCart } from '../../utils/RoutesFunctions'
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
            <NavOptions>Login</NavOptions>   
            <CartIcon onClick={()=>{changeRouteCart(setPageRoute)}} >
                <Icon />
                <SpanCart productCart={productCart}> {productCart.length} </SpanCart>
            </CartIcon>
            
            
</NavContainer>
            </HeaderContainer>
        </>
    )
}