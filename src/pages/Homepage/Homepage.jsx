import { FilterHome } from '../../components/Filter/filter'
import { BackgroundImage,  StyledH2, CardContainerHome , HomeInfoContainer, WhoWeAre, WhoWeArePic, WhoWeAreText} from './styles'
import { CardHome } from '../../components/Card/CardHome'
import Snsd from '../../assets/snsd.png'



export function Homepage(props) {
    const {
      nameToBook,
      products,
      dateDeparture,
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
    } = props;

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min)
    }

    return(

        <>
            <BackgroundImage>
                <FilterHome     
            products={products} 
            dateDeparture ={dateDeparture}
            dateReturn={dateReturn}
            setDateDeparture={setDateDeparture}
            setDateReturn={setDateReturn}
            date={date}
            setDate={setDate}
            alert={alert}
            setAlert={setAlert}
            person={person}
            setPerson={setPerson}
            filterBookDestination={filterBookDestination}
            setFilterBookDestination={setFilterBookDestination} /> <div className="textHome"><h1>wuju intergalactic tour agency</h1><p>Explore your <br/>favorite universe</p></div>
            </BackgroundImage>  
            <HomeInfoContainer>
                <StyledH2>Most <span>Popular</span> Destinations</StyledH2>
                <CardContainerHome>
                    <CardHome nameToBook={nameToBook} products = {products[(getRandomInt(1,5))-1]}/>
                    <CardHome nameToBook={nameToBook} products = {products[(getRandomInt(6,12))-1]}/>
                    <CardHome nameToBook={nameToBook} products = {products[(getRandomInt(13,18))-1]}/>
                </CardContainerHome>
                <StyledH2>Who <span>We Are</span></StyledH2>
                <WhoWeAreText> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</WhoWeAreText>
                <WhoWeArePic src={Snsd}></WhoWeArePic>
            </HomeInfoContainer>
        </>
)}