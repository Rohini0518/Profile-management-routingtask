import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <Button variant="success">
        <Link to="home" className="home-button">Home Page</Link>
      </Button>
    </div>
  );
}

export default NotFound;
