import { Link } from "react-router-dom";

import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>React Posts</h1>
      <p>
        <Link to="/new-post" className={classes.button}>
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
