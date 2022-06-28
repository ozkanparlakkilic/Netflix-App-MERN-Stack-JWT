import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import axiosInstance from "../utils/axiosInstance";

export const UserProvider = ({ children }) => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(userData ? userData : "");
  const history = useHistory();

  const login = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    axiosInstance.defaults.headers.token = `Bearer ${user.accessToken}`;
    history.push("/");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    history.push("/");
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
