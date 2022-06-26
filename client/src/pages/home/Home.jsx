import { useEffect } from "react";
import { useState } from "react";
import { Featured } from "../../components/featured/Featured";
import { List } from "../../components/list/List";
import { Navbar } from "../../components/navbar/Navbar";
import { baseUrl } from "../../helpers/baseUrl";
import axios from "axios";
import "./home.scss";

export const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `${baseUrl}/api/lists${type ? "?type=" : ""}${
            genre ? "&genre=" : ""
          }`,
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjc2NWQ1ZjdkNjM5MzQ5Yzc1NTUyOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjIwOTg3NywiZXhwIjoxNjU2NjQxODc3fQ.C5Pkj6zJKOp-yoQXp-JtJ7tm47om44eflxCAkSosolE",
          },
        });
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
