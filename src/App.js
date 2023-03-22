import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



function App() {
  return (
    
    <Card style={{ width: '20rem' }}>
      <img src="./assets/2.jpg" alt="" />
      <Card.Body>
        <Card.Title>Tandoori Chicken</Card.Title>
        <Card.Text>
                 Some quick example guyide for the tanbdoori chicken recipe.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Ingriendients</ListGroup.Item>
        <ListGroup.Item>Water</ListGroup.Item>
        <ListGroup.Item>Cooking time</ListGroup.Item>
      </ListGroup>
      <Card.Body>
    
        <Card.Link href="https">Recipe Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default App;
