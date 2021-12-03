import { Container, Navbar } from "react-bootstrap"
import Navigation from "./Navigation"

const Header = () =>{
    return(
        <Navbar bg="primary" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home">CatsApp</Navbar.Brand>
                <Navigation/>
            </Container>
        </Navbar>
    )
}
export default Header