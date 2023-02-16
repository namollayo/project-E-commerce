
import { CardContainerCatalogue, StyledH2 } from '../Homepage/styles'
import { Card } from '../../components/Card/Card'
import { FilterCatalogue } from '../../components/Filter/filter'
import { CatalogueContainer } from './styles'
import { Cart } from '../Cart/Cart'
import { FilterSortSearch } from '../../components/Filter/FilterSortSearch'


export function Catalogue(props) {
    const {
      nameToBook,
      products,
      dateDeparture,
      productCart,
      dateReturn,
      setDateReturn,
      date,
      setDate,
      alert,
      setAlert,
      setDateDeparture,
      person,
      setPerson,
      filterBookDestination,
      setFilterBookDestination,
      destinationSearch,
      setDestinationSearch,
      minPriceSearch,
      setMinPriceSearch,
      maxPriceSearch,
      setMaxPriceSearch,
      universeSearch,
      setUniverseSearch,
      order, 
      setOrder
    } = props;


    return(
        <>
            <CatalogueContainer>
                <FilterCatalogue 
            products={products} 
            dateDeparture ={dateDeparture}
            dateReturn={dateReturn}
            setDateDeparture={setDateDeparture}
            setDateReturn={setDateReturn}
            date={date}
            setDate={setDate}
            alert={alert}
            setAlert={setAlert}
            filterBookDestination={filterBookDestination}
            setFilterBookDestination={setFilterBookDestination}/>
                <StyledH2>Destinations</StyledH2>
                <FilterSortSearch 
                destinationSearch={destinationSearch}
                setDestinationSearch={setDestinationSearch}
                minPriceSearch={minPriceSearch}
                setMinPriceSearch={setMinPriceSearch}
                maxPriceSearch={maxPriceSearch}
                setMaxPriceSearch={setMaxPriceSearch}
                universeSearch={universeSearch}
                setUniverseSearch={setUniverseSearch}
                order={order}
                setOrder={setOrder} />
                <CardContainerCatalogue>
                    {products
                    .filter((product)=>{
                        return destinationSearch
                          ? product.name
                              .toLowerCase()
                              .includes(destinationSearch.toLowerCase().trim())
                          : product;
                    })
                    .filter((product)=>{
                        return minPriceSearch
                        ? (product.priceday + product.priceflight) > minPriceSearch
                        : product;
                    })
                    .filter((product)=>{
                        return maxPriceSearch
                        ? (product.priceday + product.priceflight) < maxPriceSearch
                        : product;
                    })
                    .filter((product)=>{
                        return universeSearch
                        ? product.media === universeSearch
                        : product;
                    })
                    .sort((before,after)=>{
                        let result 
                        if(order === "Increase"){
                            result = before.name > after.name? 1 : -1
                        } else if(order === "Decrease") {
                            result = before.name < after.name? 1 : -1
                        }
                        return result
                    })
                    .map((product)=>{ 
                        let listOfProducts = []
                        listOfProducts.push(product)
                        return(
                    <Card nameToBook={nameToBook} products={listOfProducts}/>)})}
                </CardContainerCatalogue>
            </CatalogueContainer>
        </>
    )

}