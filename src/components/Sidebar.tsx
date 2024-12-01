import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <div className="sidebar-section">
          <h3>Learning</h3>
          <Link
            to="/tutorials"
            className={location.pathname === "/tutorials" ? "active" : ""}
          >
            Tutorials
          </Link>
          <Link
            to="/knowledge-base"
            className={location.pathname === "/knowledge-base" ? "active" : ""}
          >
            Knowledge Base
          </Link>
        </div>
        <div className="sidebar-section">
          <h3>Resources</h3>
          <Link
            to="/documentation"
            className={location.pathname === "/documentation" ? "active" : ""}
          >
            Documentation
          </Link>
          <Link
            to="/examples"
            className={location.pathname === "/examples" ? "active" : ""}
          >
            Examples
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
