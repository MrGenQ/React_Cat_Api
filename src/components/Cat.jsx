import { Card } from "react-bootstrap"
const Cat = (props) =>{
    
    return(
        <Card style={{width: '18rem'}}>
        <Card.Header>{props.name}</Card.Header>
        <Card.Body>
            <Card.Title> Kilmė: {props.origin}</Card.Title>
            <Card.Text>
            <img alt="poster" width="150" height="180" src={(props.image)?props.image.url:null}/>
            </Card.Text>
        </Card.Body>
        </Card>
    )
}
export default Cat