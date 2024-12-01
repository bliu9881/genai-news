import { useAuthenticator } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";

function NavBar() {
  const { user, signOut } = useAuthenticator();

  return (
    <nav className="navbar">
      <div className="nav-brand">Todo App</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="nav-items">
        <span className="nav-user">{user?.signInDetails?.loginId}</span>
        <button onClick={signOut}>Sign out</button>
      </div>
    </nav>
  );
}

export default NavBar;
