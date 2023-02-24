import { useState } from 'react'
import { FilterSortSearchContainer } from './stylesSortSearch'

export function FilterSortSearch(props){
  const { setDestinationSearch,
          setMinPriceSearch,
          setMaxPriceSearch,
          universeSearch,
          setUniverseSearch,
          order,
          setOrder} = props

    const cleanSearchAndOrder = () => {
      setDestinationSearch("")
      setMinPriceSearch("")
      setMaxPriceSearch("")
      setUniverseSearch("")
      setOrder("")
    }

    return(
    <>
        <FilterSortSearchContainer>
            <input placeholder='Destination' onChange={(e)=>{setDestinationSearch(e.target.value)}}/>
            <input type="number" placeholder='Min Price' onChange={(e)=>{setMinPriceSearch(e.target.value)}}/>
            <input type="number" placeholder='Max Price' onChange={(e)=>{setMaxPriceSearch(e.target.value)}}/>
            <select id="OrderSort" value={order} onChange={(e)=>{setOrder(e.target.value)}}>
                <option value=''> Sort </option>
                <option value='Increase'> A - Z </option>
                <option value='Decrease'> Z - A </option>
            </select>
            <select id="UniverseSearch" value={universeSearch} onChange={(e)=>{setUniverseSearch(e.target.value)}}>
            <option  value="">
              Universe</option>
            <option  value="Alien">
              Alien</option>
            <option value="Avatar">
              Avatar</option>
            <option  value="Dc Comics">
              Dc Comics</option>
            <option value="Dr. Who">
              Dr. Who</option>
            <option  value="Duna">
              Duna</option>
            <option  value="Marvel">
              Marvel </option>
            <option  value="Star Trek">
             Star Trek </option>
            <option value="Star Wars">
             Star Wars </option>
            </select>
            <button onClick={cleanSearchAndOrder}> X </button>
        </FilterSortSearchContainer>
    </>
    )
}