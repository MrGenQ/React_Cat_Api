import React,{useState, useEffect} from "react"
import Cat from "./Cat"
import { Row } from "react-bootstrap"
import { Spinner } from "react-bootstrap"
const Cats = () => {
    const [cats, setCats] = useState([])

    useEffect(()=>{
        fetch("https://api.thecatapi.com/v1/breeds")
            .then(response => response.json())
            .then(data=>setCats(data))
    
    },[])
    return(
        <>
            <Row>
            {(cats.length)?cats.map(cat=><Cat key={cat.id} name={cat.name} image={cat.image} origin={cat.origin}/>)
            :
            (<Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>)}
            </Row>
        </>
    )
}
export default Cats