import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cats from "./components/Cats";
import About from "./components/About";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Search from "./components/Search";

const App = () =>{
        return(
            <Container>
                <Router>
                <Header/>
                    <Container style={{marginTop:'80px'}}>
                <Routes>
                    <Route path="/" element={<Cats/>}/>
                    <Route path="/about" element={<About/>}/>  
                    <Route path="/search" element={<Search/>}/>            
                </Routes>
                    </Container>
                </Router>
                <Footer/>
            </Container>
        )
}
export default App
