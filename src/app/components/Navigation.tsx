import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  let pathname = location.pathname;
  pathname = pathname.replace(/\//g, "");

  const getClassName = (pathname: string, tabname: string) => {
    if (tabname === pathname) {
      return " tab tab-active";
    }
    return "tab";
  };

  return (
    <>
      <div role="tablist" className="tabs tabs-border">
        <Link to="" role="tab" className={`${getClassName(pathname, "")}`}>
          {" "}
          Home
        </Link>
        <Link
          to="query"
          role="tab"
          className={`${getClassName(pathname, "query")}`}
        >
          Query
        </Link>
        <Link
          to="insert"
          role="tab"
          className={`${getClassName(pathname, "insert")}`}
        >
          Insert Records
        </Link>
      </div>
    </>
  );
}

export default Navigation;
