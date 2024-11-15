import Card from "react-bootstrap/Card";
import ActivityProgress from "./ActivityProgress";
import SocialMediaHandles from "./SocialMediaHandles";
import ActivityStatics from "./ActivityStatics";
import { NavLink } from "react-router-dom";
import LineHrTag from "./LineHrTag";
import profile1 from './assets/profile1.png';
import profile2 from './assets/profile2.png';
import profile3 from './assets/profile3.png';


function ProfileCard() {

  const profileList = [
    {
      image: profile1,
      title: "christopher",
      status: "Active",
      gender: "Male",
      dob: "18-05-1990",
      level: "85%",
      text: " Christopher laughter was the kind that filled a room, making even strangers feel like old friends"
    },
    {
      image: profile2,
      title: "Sherlock Holmes",
      status: "Active",
      gender: "Male",
      dob: "15-07-1992",
      activitylevel: "90%",
      text: " Sherlock had an uncanny knack for noticing the details everyone else missed"
    },
    {
      image: profile3,
      title: "Sophia",
      status: "Active",
      gender: "FeMale",
      dob: "05-05-1993",
      activitylevel: "87%",
      text: " Sophia always found beauty in the little things—like sunrises, sunsets,cloudysun."
    }
  ];
  return (
    <div className="container">
    {profileList.map((profile,index)=>(
      <Card className="profile-card" key={index}>
      <Card.Img className="profile-img" variant="top" src={profile.image} />
      <Card.Body>
        <Card.Title>
          <NavLink
            to="/Sophia"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {profile.title}
          </NavLink>
        </Card.Title>
        <Card.Text>{`${profile.status}|${profile.gender}|${profile.dob}`}</Card.Text>
        <div className="divide-line" />
        <Card.Text>Activity Level:{profile.level}</Card.Text>
        <ActivityProgress />
        <ActivityStatics />
        <Card.Text>
        {profile.text}
        </Card.Text>
      </Card.Body>
      <LineHrTag />
      <SocialMediaHandles />
    </Card>

    ))}
 
  </div>
  )
}

export default ProfileCard;
