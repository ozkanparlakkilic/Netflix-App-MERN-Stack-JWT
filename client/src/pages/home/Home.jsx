import { useEffect } from "react";
import { useState } from "react";
import { Featured } from "../../components/featured/Featured";
import { List } from "../../components/list/List";
import { Navbar } from "../../components/navbar/Navbar";
import { useUser } from "../../hook/useUser";
import "./home.scss";
import axiosInstance from "../../utils/axiosInstance";

export const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  const { user } = useUser();

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axiosInstance.get(
          `/api/lists${type ? "?type" : ""}${genre ? "&genre" : ""}`
        );
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list, index) => (
        <List key={index} list={list} />
      ))}
    </div>
  );
};
