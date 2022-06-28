import { createContext } from "react";

export default createContext({
  user: "",
  setUser: () => {},
  login: () => {},
  logout: () => {},
});
