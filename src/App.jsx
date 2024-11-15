import "./App.css";
import Home from "./Home";
import NotFound from "./NotFound";
import ProfileDetails from "./ProfileDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route
          path="sophia"
          element={<ProfileDetails title="Sophia"  />}
        />
        <Route
          path="christopher"
          element={<ProfileDetails title="Christopher"  />}
        />
        <Route
          path="sherlock Holmes"
          element={
            <ProfileDetails title="Sherlock Holmes" />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
