
import { CardContainerCatalogue, StyledH2 } from '../Homepage/styles'
import { Card } from '../../components/Card/Card'
import { FilterCatalogue } from '../../components/Filter/filter'
import { CatalogueContainer } from './styles'
import { Cart } from '../Cart/Cart'
import { FilterSortSearch } from '../../components/Filter/FilterSortSearch'


export function Catalogue(props) {
    const {product, dateDeparture, cartProduct, dateReturn, setDateReturn, date, setDate, alert, setAlert, setDateDeparture, destination,setDestination,person,setPerson} = props
    return(
        <>
            {/* <Header logo={logo} /> */}
            <CatalogueContainer>
                <FilterCatalogue 
            product={product} 
            dateDeparture ={dateDeparture}
            dateReturn={dateReturn}
            setDateDeparture={setDateDeparture}
            setDateReturn={setDateReturn}
            date={date}
            setDate={setDate}
            alert={alert}
            setAlert={setAlert}/>
                <StyledH2>Destinations</StyledH2>
                <FilterSortSearch product={product} />
                <p className="empty"cartProduct={cartProduct}>Destination not found</p>
                <CardContainerCatalogue>
                    <Card product={product}/>
                </CardContainerCatalogue>
            </CatalogueContainer>
            {/* <Footer/>   */}
        </>
    )

}