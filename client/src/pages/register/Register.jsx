import axios from "axios";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { checkForFields } from "../../helpers/checkForFields";
import { validateEmail } from "../../helpers/validateEmail";
import "./register.scss";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const emailRef = useRef();

  const history = useHistory();

  const handleStart = () => {
    const emailValue = emailRef.current.value;

    if (validateEmail(emailValue)) {
      setEmail(emailRef.current.value);
    } else {
      console.log("Email not correct syntax");
    }
  };

  const handleFinish = (e) => {
    e.preventDefault();

    if (checkForFields(password, username)) {
      register();
    } else {
      console.log("All field required");
    }
  };

  const register = async () => {
    try {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_SERVER_URL}/api/auth/register`,
        data: {
          email,
          password,
          username,
        },
      });
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button
            className="loginButton"
            onClick={() => history.push("/login")}
          >
            Sign In
          </button>
        </div>

        <div className="container">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          {!email ? (
            <div className="input">
              <input type="email" placeholder="Email Address" ref={emailRef} />
              <button className="registerButton" onClick={handleStart}>
                Get Started
              </button>
            </div>
          ) : (
            <form className="input">
              <input
                type="text"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="registerButton" onClick={handleFinish}>
                Start
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
