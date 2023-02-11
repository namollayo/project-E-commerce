import { useState } from 'react'
import destinations from './catalogue/destinations.json'
import { Header } from './components/Header/Header'
import { Homepage } from './pages/Homepage/Homepage'
import { Catalogue } from './pages/Catalogue/Catalogue'
import wujuLogo from './assets/logoujutext.png'
import { GlobalStyle } from './GlobalStyle'
import { Footer } from './components/Footer/Footer'
import { Cart } from './pages/Cart/Cart'


function App() {
  const [pageRoute, setPageRoute] = useState(0)
  const [cartProducts, setCartProducts] = useState([destinations[0]])
  const [dateDeparture,setDateDeparture] = useState()
  const [dateReturn,setDateReturn] = useState()
  const [date,setDate] = useState()
  const [alert,setAlert] = useState()
  const [destination,setDestination] = useState()
  const [person,setPerson] = useState()
  
    const renderScreen = () => {
      let page 
        switch (pageRoute) {
          case 0:
            page = <Homepage className="MainContenteClass"
            product={destinations} 
            dateDeparture ={dateDeparture}
            dateReturn={dateReturn}
            setDateDeparture={setDateDeparture}
            setDateReturn={setDateReturn}
            date={date}
            setDate={setDate}
            alert={alert}
            setAlert={setAlert}
            destination={destination}
            setDestination={setDestination}
            person={person}
            setPerson={setPerson}
            />
            break
          case 1:
            page = <Catalogue className="MainContenteClass" 
            product={destinations} 
            dateDeparture ={dateDeparture}
            dateReturn={dateReturn}
            setDateDeparture={setDateDeparture}
            setDateReturn={setDateReturn}
            date={date}
            setDate={setDate}
            alert={alert}
            setAlert={setAlert}
            destination={destination}
            setDestination={setDestination}
            person={person}
            setPerson={setPerson}/>
            break
          case 2:
            page = <Cart className="cartTab"cartProduct={cartProducts}/>
            break
          default: 
            alert("Page not found")
          }
      return page
    }

  return (
    <div className="App">
      <GlobalStyle/>
      <Header className="HeaderClass" logo={wujuLogo} setPageRoute={setPageRoute} productCart={cartProducts} />
      {/* <Cart cartProduct={cartProducts}/> */}
      {renderScreen()}
      {/* <Homepage product={destinations}/>
      <Catalogue product={destinations}/>
      <Cart product={destinations}/> */}
      <Footer className="FooterClass" />
    </div>
  )
}

export default App
