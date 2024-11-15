import Card from "react-bootstrap/Card";
import ActivityProgres from "../ActivityProgres";
import SocialMediaHandles from "../SocialMediaHandles";
import ActivityStatics from "../ActivityStatics";
import { NavLink } from "react-router-dom";

function ProfileCard(props) {
  const title = props.title;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img className="profile-img" variant="top" src={props.profilepic} />
      <Card.Body>
        <Card.Title>
          <NavLink
            to="/Sophia"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {title}
          </NavLink>
        </Card.Title>
        <Card.Text>Active|Male|Born:18-05-1990</Card.Text>
        <div className="divide-line"></div>
        <Card.Text>Activity Level:87%</Card.Text>
        <ActivityProgres />
        <ActivityStatics />
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Card.Text>
      </Card.Body>
      <hr />
      <SocialMediaHandles />
    </Card>
  );
}

export default ProfileCard;
