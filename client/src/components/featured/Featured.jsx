import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { baseUrl } from "../../helpers/baseUrl";
import "./featured.scss";

export const Featured = ({ type }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `${baseUrl}/api/movies/random?type=${type}`,
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjc2NWQ1ZjdkNjM5MzQ5Yzc1NTUyOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjIwOTg3NywiZXhwIjoxNjU2NjQxODc3fQ.C5Pkj6zJKOp-yoQXp-JtJ7tm47om44eflxCAkSosolE",
          },
        });
        setContent(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="featured">
      {console.log(content)}
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select defaultValue="0" name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={content.image} alt="" />
      <div className="info">
        <img src={content.imageTitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};
