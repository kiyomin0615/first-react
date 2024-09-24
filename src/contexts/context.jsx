import { createContext } from "react";

const Context = createContext({
  posts: [],
  isFetching: false,
  addNewPost: () => {},
});

export default Context;
