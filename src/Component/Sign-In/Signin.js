import { useState } from "react";
import { useAppContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import './SignIn.css';
import Header from "../Header/Header";

export default function Signin() {
  const { handleData, getState } = useAppContext();
  const navigate = useNavigate();

  const [adminInfn, setDetales] = useState({
    name: "",
    password: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    // Log the adminInfn object to check if it's correct
    console.log(adminInfn);

    // Update the context with the submitted data
    handleData(adminInfn);

    // Navigate after the state is updated
    navigate("/Dashboard");
  };

  return (
    <div className="parent">
      <div className="signin-container">
        <h2>Sign In</h2>
        <form onSubmit={handelSubmit}>
          <div className="input-group">
            <input
              type="name"
              id="name"
              placeholder=" "
              onChange={(e) => {
                setDetales((prev) => ({ ...prev, name: e.target.value }));
              }}
              required
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              placeholder=" "
              required
              onChange={(e) => {
                setDetales((prev) => ({ ...prev, password: e.target.value }));
              }}
            />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
