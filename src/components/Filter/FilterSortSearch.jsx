import { useState } from 'react'
import { FilterSortSearchContainer } from './stylesSortSearch'

export function FilterSortSearch(props){
    return(
    <>
        <FilterSortSearchContainer>
            <input placeholder='Destination'/>
            <input type="number" placeholder='Min Price'/>
            <input type="number" placeholder='Max Price'/>
            <select name="" id="">
                <option value=''> Sort </option>
                <option value='Crescente'> Crescente </option>
                <option value='Decrescente'> Decrescente </option>
            </select>
            <select>
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
            <option value="Star Wars ">
             Star Wars </option>
            </select>
            <button> X </button>
        </FilterSortSearchContainer>
    </>
    )
}