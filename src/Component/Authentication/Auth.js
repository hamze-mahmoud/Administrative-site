import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../Context/Context";// adjust the import according to your file structure

export default function Auth({ children }) {
  const navigate = useNavigate();
  const { handleData, getState } = useAppContext();
  const state = getState();




  // Navigate only if the state is incorrect
  useEffect(() => {
    console.log("Updated state: ", state);
    if (state.name !== "Thair nemir khaled" || state.password !== "123456789") {
        console.log(state);
      console.log("false");
      navigate("/"); // navigate to home page
    }
  }, [state, navigate]);

  // Render children if the state is correct
  if (state.name === "Thair nemir khaled" && state.password === "123456789") {
    console.log("true");
    return children;
  }

  return null; // Return nothing if state doesn't match
}
