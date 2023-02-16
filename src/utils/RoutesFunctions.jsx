
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

export const checkDates = (dateDeparture, dateReturn, setAlert) => {
    const data1 = new Date(dateDeparture)
    const data2 = new Date(dateReturn)
    if(data1 <= data2){
        setAlert("")
    }
    else {
        setAlert("Please enter a valid date")
    }
}