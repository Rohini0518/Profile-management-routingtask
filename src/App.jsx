import "./App.css";
import Home from "./Home"
import profile1 from "./profile1.png";
import profile2 from "./profile2.png";
import profile3 from "./profile3.png";
import ProfileDetails from "./ProfileDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
      <Route
          path="Home"
          element={<Home/>}
        />
        <Route
          path=""
          element={<Home/>}
        />
        <Route
          path="Sophia"
          element={<ProfileDetails title="Sophia" profilepic={profile3} />}
        />
        <Route
          path="Christopher"
          element={<ProfileDetails title="Christopher" profilepic={profile1} />}
        />
         <Route
          path="Sherlock Holmes"
          element={<ProfileDetails title="Sherlock Holmes" profilepic={profile2} />}
        />
        <Route
          path="Home/Sophia"
          element={<ProfileDetails title="Sophia" profilepic={profile3} />}
        />
      </Routes>

     
    </div>
  );
}

export default App;
