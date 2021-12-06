//import React,{useState} from "react";
import React from "react"
const Search = ({onSearch}) =>{
    return(
        <>
            <input type="text" placeholder="Breed" onChange={e => onSearch(e.target.value)}></input>      
        </>
        
    )
}
export default Search