import Card from "react-bootstrap/Card";
import ActivityProgres from "../ActivityProgres";
function ProfileCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img className="profile-img" variant="top" src={props.profilepic} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>Active|Male|Born:18-05-1990</Card.Text>
        <div className="divide-line"></div>
        <Card.Text>Activity Level:87%</Card.Text>
        <ActivityProgres />
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;
