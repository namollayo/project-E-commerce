import { FiltroHomeContainer, FiltroCatalogueContainer, StyledInputDestination, StyledInputPerson, StyledInput, StyledSearchButton, CatalogueStyledInputDestination, CatalogueStyledInputPerson, CatalogueStyledInput, CatalogueStyledSearchButton } from './styles'
import { useState } from 'react'


export function FilterHome(props){
    const { product, dateDeparture, dateReturn, setDateReturn, date, setDate, alert, setAlert, setDateDeparture, destination,setDestination,person,setPerson } = props
    const checkDates = () => {
        const data1 = new Date(dateDeparture)
        const data2 = new Date(dateReturn)
        if(data1 <= data2){
            setAlert("")
        
        }
        else {
            setAlert("Please enter a valid date")
        }
    }


    return(
    <>
    <FiltroHomeContainer>
            <StyledInputDestination id="Destination" placeholder='Destination' onChange={(e)=>{ setDestination(e.target.value)}}>
            <option>Destination</option>
            {product.map((product) => {
                return (
            <option key={product.id} value={product.name}>
              {product.name}
            </option>
          );
           })}
           </StyledInputDestination>
            <StyledInput id="DepartureDate" type="date" onChange={(e)=>{ setDateDeparture(e.target.value)}}/>
            <StyledInputPerson id="Passengers" placeholder='Nº of Passengers' type="number" onChange={(e)=>{ setPerson(e.target.value)}} />
            <StyledInput id="ReturnDate" type="date" onChange={(e)=>{ setDateReturn(e.target.value)}}/> <br/>
            <p className="alert">{alert}</p>
        <StyledSearchButton onClick={checkDates}>SEARCH</StyledSearchButton>
    </FiltroHomeContainer>
    </>

    )}

    export function FilterCatalogue(props){
        const {product, dateDeparture, dateReturn, setDateReturn, date, setDate, alert, setAlert, setDateDeparture, destination,setDestination,person,setPerson} = props

        return(
            <>
            <FiltroCatalogueContainer>
            <CatalogueStyledInputDestination id="Destination" placeholder='Destination' onChange={(e)=>{ setDestination(e.target.value)}}>
            <option>Destination</option>
            {product.map((product) => {
                return (
            <option key={product.id} value={product.name}>
              {product.name}
            </option>
          );
           })}
           </CatalogueStyledInputDestination>
                    <CatalogueStyledInputPerson id="Passengers" placeholder='Nº of Passengers' type="number" onChange={(e)=>{ setPerson(e.target.value)}} />
                    <CatalogueStyledInput id="DepartureDate" type="date" onChange={(e)=>{ setDateDeparture(e.target.value)}} />
                    <CatalogueStyledInput id="ReturnDate" type="date" onChange={(e)=>{ setDateReturn(e.target.value)}}/>         
                    <CatalogueStyledSearchButton>SEARCH</CatalogueStyledSearchButton>
            </FiltroCatalogueContainer>
            </>
        
            
        )
    }