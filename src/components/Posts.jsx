import Post from "./Post";
import classes from "./Posts.module.css";

function Posts() {
  return (
    <ul className={classes.posts}>
      <Post author="Kiyomin" content="Living in Japan." />
      <Post author="Jieun" content="Living in Japan as well." />
    </ul>
  );
}

export default Posts;
