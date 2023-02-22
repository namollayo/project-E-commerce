import { useState } from 'react'
import destinations from './catalogue/destinations.json'
import { Header } from './components/Header/Header'
import { Homepage } from './pages/Homepage/Homepage'
import { Catalogue } from './pages/Catalogue/Catalogue'
import wujuLogo from './assets/logoujutext.png'
import { GlobalStyle } from './GlobalStyle'
import { Footer } from './components/Footer/Footer'
import { Cart } from './pages/Cart/Cart'
import { BookTrip } from './pages/BookTrip/BookTrip'


function App() {
  const [pageRoute, setPageRoute] = useState(0)
  const [productCart, setProductCart] = useState([])
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

  

  const nameToBook = (product) => {
    const destinationToBook = product.name
    setFilterBookDestination(destinationToBook);
}

    const renderScreen = () => {
      let page 
        switch (pageRoute) {
          case 0:
            page = <Homepage className="MainContenteClass" 
            productCart={productCart}
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
            nameToBook={nameToBook}
            setPageRoute={setPageRoute}
            />
            break
          case 1:
            page = <Catalogue className="MainContenteClass" 
            productCart={productCart}
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
            nameToBook={nameToBook}
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
            page = <Cart productCart={productCart}/>
            break
          case 3:
            page = <BookTrip productCart={productCart}/>
            break
          default: 
            alert("Page not found")
          }
      return page
    }

  return (
    <div className="App">
      <GlobalStyle/>
      <Header logo={wujuLogo} setPageRoute={setPageRoute} productCart={productCart} />
      {renderScreen()}
      <Footer />
    </div>
  )
}

export default App
