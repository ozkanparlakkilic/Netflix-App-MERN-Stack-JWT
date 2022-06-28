import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const movieCardWidth = 225;
const horizontalSpace = 50;
const emptyBetweenMovie = 2.5;

export const ListItem = ({ index, movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = movie.trailer;

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listItem"
        style={{
          left:
            isHovered &&
            index * movieCardWidth -
              horizontalSpace -
              index * emptyBetweenMovie,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.image} alt="" />
        {isHovered && (
          <>
            <video src={trailer} autoPlay={true} muted loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};
