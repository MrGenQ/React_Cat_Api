import React,{useState, useEffect} from "react"
import Cat from "./Cat"
import { Row } from "react-bootstrap"
import Search from "./Search"
import { Spinner } from "react-bootstrap"
const SearchTab = () => {
    let [searchCats, setSearchCats] = useState([])
    const [searchValue, setSearchValue] = useState("");
    useEffect(()=>{
        fetch("https://api.thecatapi.com/v1/breeds")
            .then(response => response.json())
            .then(data=>setSearchCats(data))
    
    },[])
    const filterBreed = () => {
        return searchCats.filter((breed) =>
          breed.name.toLowerCase().includes(searchValue.toLowerCase())
        );
      };
    return(
        <>
            <Search onSearch={setSearchValue}/>
            <Row>
          
            {(searchCats.length)?filterBreed().map(cat=><Cat key={cat.id} name={cat.name} image={cat.image} origin={cat.origin}/>)
            :
            (<Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>)}
            </Row>
        </>
    )
}
export default SearchTab