import { FiltroHomeContainer, FiltroCatalogueContainer, StyledInputDestination, StyledInputPerson, StyledInput, StyledSearchButton, CatalogueStyledInputDestination, CatalogueStyledInputPerson, CatalogueStyledInput, CatalogueStyledSearchButton } from './styles'
import { sendInfoToBookTrip } from '../../utils/utils'


export function FilterHome(props){
  const {
    products,
    setProductCart,
    dateDeparture,
    dateReturn,
    setDateReturn,
    setPageRoute,
    alert,
    setAlert,
    setDateDeparture,
    person,
    setPerson,
    filterBookDestination,
    setFilterBookDestination,
  } = props;
    
    

  return(
    <FiltroHomeContainer>
      <StyledInputDestination value={filterBookDestination} id="Destination" placeholder='Destination' 
                              onChange={(e)=>{setFilterBookDestination(e.target.value)}}>
        <option value="" hidden>Destination</option>
        {
          products.map(
              (product) => {
                return (<option key={product.id} value={product.name}>{product.name}</option>);
            }
          )
        }
      </StyledInputDestination>
      <StyledInput id="DepartureDate" type="date" onChange={(e)=>{if(alert){setAlert("")};setDateDeparture(e.target.value)}}/>
      <StyledInputPerson id="Passengers" placeholder='Nº of Passengers' type="number" onChange={(e)=>{setPerson(e.target.value)}} />
      <StyledInput id="ReturnDate" type="date" onChange={(e)=>{if(alert){setAlert("")};setDateReturn(e.target.value)}}/> <br/>
      <p className="alert">{alert}</p>
      <StyledSearchButton 
        onClick={
          ()=> {
            sendInfoToBookTrip (
              products, setPageRoute, setProductCart, 
              dateDeparture, dateReturn, setAlert, 
              person, filterBookDestination, setFilterBookDestination, 
              setDateReturn, setDateDeparture, setPerson)
          }
        }>SEARCH
      </StyledSearchButton>
    </FiltroHomeContainer>
  )
}

export function FilterCatalogue(props){
  const {
    products,
    setProductCart,
    dateDeparture,
    dateReturn,
    setDateReturn,
    setPageRoute,
    alert,
    setAlert,
    filterBookDestination,
    setDateDeparture,
    person,
    setPerson,
    setFilterBookDestination,
  } = props;
        
  return(
    <FiltroCatalogueContainer>
      <CatalogueStyledInputDestination value={filterBookDestination} id="Destination" placeholder='Destination' 
                                       onChange={(e)=>{setFilterBookDestination(e.target.value)}}>
        <option value="" hidden>Destination</option>
        {
          products.map(
              (product) => {
                return (<option key={product.id} value={product.name}>{product.name}</option>);
            }
          )
        }
      </CatalogueStyledInputDestination>
      <CatalogueStyledInputPerson id="Passengers" placeholder='Nº of Passengers' type="number" onChange={(e)=>{ setPerson(e.target.value)}} />
      <CatalogueStyledInput id="DepartureDate" type="date" onChange={(e)=>{ setDateDeparture(e.target.value)}} />
      <CatalogueStyledInput id="ReturnDate" type="date" onChange={(e)=>{ setDateReturn(e.target.value)}}/>         
      <p className="alert">{alert}</p>
      <CatalogueStyledSearchButton
        onClick={
          ()=> {
            sendInfoToBookTrip (
              products, setPageRoute, setProductCart, 
              dateDeparture, dateReturn, setAlert, 
              person, filterBookDestination, setFilterBookDestination, 
              setDateReturn, setDateDeparture, setPerson)
          }
        }>search
      </CatalogueStyledSearchButton>
    </FiltroCatalogueContainer>
  )
}