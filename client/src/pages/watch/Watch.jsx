import { ArrowBackOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";
import "./watch.scss";

export const Watch = () => {
  const location = useLocation();
  const history = useHistory();
  const movie = location.movie;
  return (
    <div className="watch">
      <div className="back" onClick={() => history.goBack()}>
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        muted
        progress
        controls
        src={movie.video}
      />
    </div>
  );
};
