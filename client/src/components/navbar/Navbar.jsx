import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useUser } from "../../hook/useUser";
import "./Navbar.scss";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useUser();

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(!window.pageYOffset ? false : true);
    };

    return (window.scroll = null);
  }, [isScrolled]);

  return (
    <div className={`navbar ${isScrolled && "scrolled"}`}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />

          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>

          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={logout}>Log Out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
