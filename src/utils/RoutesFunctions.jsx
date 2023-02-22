
// Routes

export const changeRouteCatalogue = (setPageRoute) => {
    setPageRoute(1)
}

export const changeRouteHome = (setPageRoute) => {
    setPageRoute(0)
}

export const changeRouteCart = (setPageRoute) => {
    setPageRoute(2)
}
export const changeRouteBook = (setPageRoute) => {
    setPageRoute(3)
}


// Dates Functions

export const checkDates = (dateDeparture, dateReturn, setAlert) => {
    const date1 = new Date(dateDeparture)
    const date2 = new Date(dateReturn)


    if(date1 <= date2){
        setAlert("")
    }
    else {
        setAlert("Please enter a valid date")
    }
    return date1 <= date2
}

export const getNumberOfDays = (dateDeparture,dateReturn) =>{
    const date1 = new Date(dateDeparture)
    const date2 = new Date(dateReturn)

    let difference = date2.getTime() - date1.getTime() 
    let numberOfDays = difference/ (1000 * 3600 * 24)
    return numberOfDays 
}

export const  formatDate = (dateInput) => {
    let date = new Date(dateInput)
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
  
    return month + '/' + day + '/' + year;
}

// FilterSearch


export const checkPerson = (person) => {
    return person > 0  
}

export const sendInfoToBookTrip = (products,setPageRoute, setProductCart, dateDeparture, dateReturn, setAlert, person, filterBookDestination) =>{
    if (checkPerson(person) &&
    checkDates(dateDeparture, dateReturn, setAlert) &&
    filterBookDestination    
    ) { 
        
        const product = products.filter((product)=> product.name === filterBookDestination)
        product[0] = {...product[0], dates: [dateDeparture, dateReturn], amount:1, nPerson: Number(person), totalDays: getNumberOfDays(dateDeparture, dateReturn)}
        setProductCart(product);
        setPageRoute(3);
    }

}
