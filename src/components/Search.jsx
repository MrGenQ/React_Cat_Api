import Cat from "./Cat";
import React,{useState} from "react";
import SearchResult from "./SearchResult";
const Search = () =>{
    let [kitties, setCats] = useState([])

    const [nam, setName] = useState ('')
    const handleInput = (nam) =>{
        console.log(nam)
        const url = "https://api.thecatapi.com/v1/breeds/search?q=";
        const key = nam;

        fetch(`${url}${key}`)
            .then(response => response.json())
            .then(response=>setCats(response))
            .then(()=> console.log(kitties))
            .then(() => {
                kitties.map(cat=><Cat key={cat.id} name={cat.name} image={cat.image} origin={cat.origin}/>)
            })
            
    };
    console.log(kitties.name)
    return(
        <>
        <form>
            <input type="text" placeholder="Cat Name" onChange={e => setName(e.target.value)}></input>
            <button type="button" onClick={() => handleInput(nam)}>Submit</button>
        </form>
        
        
        </>
        
    )
}
export default Search