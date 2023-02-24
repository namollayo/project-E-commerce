import { useState, useEffect } from 'react'
import destinations from './catalogue/destinations.json'
import { Header } from './components/Header/Header'
import { Homepage } from './pages/Homepage/Homepage'
import { Catalogue } from './pages/Catalogue/Catalogue'
import wujuLogo from './assets/logoujutext.png'
import { GlobalStyle } from './GlobalStyle'
import { Footer } from './components/Footer/Footer'
import { Cart } from './pages/Cart/Cart'
import { BookTrip } from './pages/BookTrip/BookTrip'
import { accessTripItemToCart, saveToLocalStorage } from './utils/utils'


function App() {
  const [pageRoute, setPageRoute] = useState(0)
  const [productCart, setProductCart] = useState([])
  const [inCartProduct, setInCartProduct] = useState([])
  const [dateDeparture,setDateDeparture] = useState()
  const [dateReturn,setDateReturn] = useState()
  const [alert,setAlert] = useState()
  const [person,setPerson] = useState()
  const [filterBookDestination, setFilterBookDestination] = useState()
  const [destinationSearch,setDestinationSearch] = useState()
  const [minPriceSearch, setMinPriceSearch] = useState()
  const [maxPriceSearch, setMaxPriceSearch] = useState()
  const [universeSearch, setUniverseSearch] = useState()
  const [order, setOrder] = useState()

  useEffect(()=> {
    accessTripItemToCart(inCartProduct, setInCartProduct)
},[])

useEffect(() => {
  if(inCartProduct.length > 0){
  const inCartProductString = JSON.stringify(inCartProduct)
  localStorage.setItem('tripItem', inCartProductString)} } ,
  [inCartProduct]
);

    const renderScreen = () => {
      let page 
        switch (pageRoute) {
          case 0:
            page = <Homepage className="MainContenteClass" 
            setProductCart={setProductCart}
            products={destinations} 
            dateDeparture ={dateDeparture}
            dateReturn={dateReturn}
            setDateDeparture={setDateDeparture}
            setDateReturn={setDateReturn}
            alert={alert}
            setAlert={setAlert}
            person={person}
            setPerson={setPerson}
            filterBookDestination={filterBookDestination}
            setFilterBookDestination={setFilterBookDestination}
            setPageRoute={setPageRoute}
            />
            break
          case 1:
            page = <Catalogue className="MainContenteClass" 
            setProductCart={setProductCart}
            products={destinations} 
            dateDeparture ={dateDeparture}
            dateReturn={dateReturn}
            setDateDeparture={setDateDeparture}
            setDateReturn={setDateReturn}
            alert={alert}
            setAlert={setAlert}
            destinationSearch={destinationSearch}
            setDestinationSearch={setDestinationSearch}
            person={person}
            setPerson={setPerson}
            filterBookDestination={filterBookDestination}
            setFilterBookDestination={setFilterBookDestination}
            minPriceSearch={minPriceSearch}
            setMinPriceSearch={setMinPriceSearch}
            maxPriceSearch={maxPriceSearch}
            setMaxPriceSearch={setMaxPriceSearch}
            universeSearch={universeSearch}
            setUniverseSearch={setUniverseSearch}
            order={order}
            setOrder={setOrder}
            setPageRoute={setPageRoute}
            />
            break
          case 2:
            page = <Cart inCartProduct={inCartProduct} 
            setInCartProduct={setInCartProduct}
            setPageRoute={setPageRoute}/>
            break
          case 3:
            page = <BookTrip productCart={productCart}
            setProductCart={setProductCart}
            inCartProduct={inCartProduct}
            setInCartProduct={setInCartProduct}
            setPageRoute={setPageRoute}/>
            break
          default: 
            alert("Page not found")
          }
      return page
    }

  return (
    <div className="App">
      <GlobalStyle/>
      <Header logo={wujuLogo} setPageRoute={setPageRoute} productCart={inCartProduct} />
      {renderScreen()}
      <Footer />
    </div>
  )
}

export default App
