import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProfileDetails(props) {
  const title = props.title;
  const listItems = [
    title,
    "Led AI project",
    "Award-winning developer",
    "Full-stack development",
  ];
  return (
    <Card style={{ width: "28rem" }}>
      <Card.Img variant="top" src={props.profilepic} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {props.title} is a dedicated software engineer with over 5 years of
          experience in full-stack development. Known for his innovative
          solutions and team collaboration,
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {listItems.map((item, index) => (
          <ListGroup.Item key={index}>{item}</ListGroup.Item>
        ))}
      </ListGroup>
      <Button variant="primary">
        <Link to="/home" className="home-button">
          Home Page
        </Link>
      </Button>
    </Card>
  );
}

export default ProfileDetails;
