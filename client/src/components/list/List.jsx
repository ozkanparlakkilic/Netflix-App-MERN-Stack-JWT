import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import { ListItem } from "../listItem/ListItem";
import "./list.scss";

export const List = ({ list }) => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const listRef = useRef();

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && sliderNumber > 0) {
      setSliderNumber((sliderNumber) => sliderNumber - 1);
      listRef.current.style.transform = `translate(${230 + distance}px)`;
    }
    if (direction === "right" && sliderNumber < 5) {
      setSliderNumber((sliderNumber) => sliderNumber + 1);
      listRef.current.style.transform = `translate(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: sliderNumber ? "block" : "none" }}
        />
        <div className="container" ref={listRef}>
          {list.movies.map((listItem, index) => (
            <ListItem movie={listItem} index={index} key={index} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};
