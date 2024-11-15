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
        <Route path="/:id" element={<ProfileDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
