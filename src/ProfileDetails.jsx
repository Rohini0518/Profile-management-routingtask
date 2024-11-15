import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import work from "./assets/work.jpg";

function ProfileDetails(props) {
  const { id } = useParams();
  const profiletext = `is a dedicated software engineer with over 5 years of
            experience in full-stack development. Known for his innovative
            solutions and team collaboration,`;

  return (
    <div className="profile-details-container">
      <Card>
        <Card.Img variant="top" src={work} />
        <Card.Body>
          <Card.Title>{id}</Card.Title>
          <Card.Text>
            {id} {profiletext}
          </Card.Text>
        </Card.Body>
        <Button variant="primary">
          <Link to="/" className="home-button">
            Home Page
          </Link>
        </Button>
      </Card>
    </div>
  );
}

export default ProfileDetails;
