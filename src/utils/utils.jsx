
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
    const now = new Date()

    if(date1 <= date2 && date1 > now){
        setAlert("")
    }
    else {
        setAlert("Please enter a valid date")
    }
    return date1 <= date2 && date1 > now
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


export const checkPerson = (person,setAlert) => {
    if(person >= 1 && person < 100){
        setAlert("")
    }
    else {
        setAlert("Please enter a valid nº of person(s)")
    }
    return person >= 1 && person < 100

}
export const checkDestination = (filterBookDestination,setAlert) => {
    if(filterBookDestination !== ""){
        setAlert("")
    }
    else {
        setAlert("Please choose a Destination")
    }
    return filterBookDestination !== ""

}

export const sendInfoToBookTrip = (products,setPageRoute, setProductCart, dateDeparture, dateReturn, setAlert, person, filterBookDestination, setFilterBookDestination, setDateReturn, setDateDeparture, setPerson) =>{
    if (checkDestination(filterBookDestination,setAlert) &&
    checkPerson(person, setAlert) &&
    checkDates(dateDeparture, dateReturn, setAlert) 
    ) { 
        
        const product = products.filter((product)=> product.name === filterBookDestination)
        product[0] = {...product[0], dates: [dateDeparture, dateReturn], amount:1, nPerson: Number(person), totalDays: getNumberOfDays(dateDeparture, dateReturn)}
        setProductCart(product);

        setPageRoute(3);
        setFilterBookDestination("")
        setDateReturn("")
        setDateDeparture("")
        setPerson("")
    }

}

//BookTrip to Cart 

export const sendTripToCart = (productCart, setProductCart, inCartProduct , setInCartProduct, setPageRoute) =>{       
       let addToCart
       addToCart = productCart[0]
       setInCartProduct([...inCartProduct, addToCart])
       setProductCart([]);
       setPageRoute(2)
       saveToLocalStorage([...inCartProduct, addToCart]) }


export const saveToLocalStorage = (inCartProduct) =>{
    const tripItem = JSON.stringify(inCartProduct)
    localStorage.setItem('tripItem', tripItem)
}

export const accessTripItemToCart = (inCartProduct, setInCartProduct) => {
    const ArrayOfTripsString = localStorage.getItem("tripItem")
    const ArrayOfTrips =  JSON.parse(ArrayOfTripsString)
    if(inCartProduct) {
        setInCartProduct(ArrayOfTrips)
    }
}

// Cart

export const removePerson = (cartProduct, inCartProduct, setInCartProduct) => {
    if(cartProduct.nPerson > 1) {
        const sum = cartProduct.nPerson - 1 
        console.log(sum);
        cartProduct.nPerson = sum 
        let CartAtt = [...inCartProduct]
        setInCartProduct(CartAtt)        
    } else {
        removeItem(cartProduct, inCartProduct, setInCartProduct)
    }
}
export const addPerson = (cartProduct, inCartProduct, setInCartProduct) => {
    if(cartProduct.nPerson < 100) {const sum = cartProduct.nPerson + 1 
    console.log(sum);
    cartProduct.nPerson = sum 
    let CartAtt = [...inCartProduct]
    setInCartProduct(CartAtt)}
}

export const removeItem = (cartProduct, inCartProduct, setInCartProduct) =>{
    if(confirmRemove(cartProduct)){const inCartProductFiltered = inCartProduct.filter((product)=> product !== cartProduct)
    setInCartProduct(inCartProductFiltered) 
    saveToLocalStorage(inCartProductFiltered)}
}

export const addUnit = (cartProduct, inCartProduct, setInCartProduct) =>{
    const sum = cartProduct.amount + 1 
    cartProduct.amount = sum 
    let CartAtt = [...inCartProduct]
    setInCartProduct(CartAtt)
}
export const removeUnit = (cartProduct, inCartProduct, setInCartProduct) =>{
    const sum = cartProduct.amount - 1 
    cartProduct.amount = sum 
    let CartAtt = [...inCartProduct]
    setInCartProduct(CartAtt)
}

export const confirmRemove = (cartProduct) => {
    return confirm(`Are you sure you want to remove ${cartProduct.name} from your Cart?`)
}

export const nameToBook = (product, setFilterBookDestination) => {
    const destinationToBook = product.name
    setFilterBookDestination(destinationToBook);
}