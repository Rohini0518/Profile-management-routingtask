import ProfileCard from "./assets/ProfileCard";
import profile1 from "./profile1.png";
import profile2 from "./profile2.png";
import profile3 from "./profile3.png";

function Home() {
  const profiles = [
    { title: "Christopher", profilepic: profile1 },
    { title: "Sherlock Holmes", profilepic: profile2 },
    { title: "Sophia", profilepic: profile3 },
  ];
  return (
    <div>
      <h1>Users Manaagement App</h1>
      <div className="container">
        {profiles.map((profile, index) => (
          <ProfileCard title={profile.title} profilepic={profile.profilepic} />
        ))}
      </div>
    </div>
  );
}

export default Home;
