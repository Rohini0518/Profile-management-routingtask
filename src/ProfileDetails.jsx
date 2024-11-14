import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ProfileDetails(props) {
  return (
    <Card style={{ width: "28rem" }}>
      <Card.Img variant="top" src={props.profilepic} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.title} is a dedicated software engineer with over 5 years of
          experience in full-stack development. Known for his innovative
          solutions and team collaboration,
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.title}</ListGroup.Item>
        <ListGroup.Item>Led AI project</ListGroup.Item>
        <ListGroup.Item>Award-winning developer</ListGroup.Item>
        <ListGroup.Item>Full-stack development</ListGroup.Item>

      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProfileDetails;
