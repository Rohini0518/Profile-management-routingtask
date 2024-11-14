import ProfileCard from "./assets/ProfileCard";
import profile1 from "./profile1.png";
import profile2 from "./profile2.png";
import profile3 from "./profile3.png";

function Home() {
  return (
    <div>
      <h1>Employee Profiles</h1>
      <div className="container">
        <ProfileCard title="Christopher" profilepic={profile1} />
        <ProfileCard title="Sherlock Holmes" profilepic={profile2} />
        <ProfileCard title="Sophia" profilepic={profile3} />
      </div>
    </div>
  );
}

export default Home;
