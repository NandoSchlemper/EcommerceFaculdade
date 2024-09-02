import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`address/`}>Your address</Link>
          </li>
          <li>
            <Link to={`categories/`}>Categories</Link>
          </li>
          <li>
            <Link to={`oferts/`}>Oferts</Link>
          </li>
          <li>
            <Link to={`history/`}>History</Link>
          </li>
          <li>
            <Link to={`supermarket/`}>Supermarket</Link>
          </li>
          <li>
            <Link to={`contact/`}>Contacts</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
