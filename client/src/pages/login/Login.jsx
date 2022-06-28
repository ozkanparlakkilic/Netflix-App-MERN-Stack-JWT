import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { checkForFields } from "../../helpers/checkForFields";
import { validateEmail } from "../../helpers/validateEmail";
import { useUser } from "../../hook/useUser";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (checkForFields(password) && validateEmail(email)) {
      try {
        const res = await axios({
          method: "post",
          url: `${process.env.REACT_APP_SERVER_URL}/api/auth/login`,
          data: {
            email,
            password,
          },
        });

        login(res.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("All field required");
    }
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={(e) => handleLogin(e)}>
            Sign In
          </button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
