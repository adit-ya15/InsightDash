import { useContext, useState } from "react";
import "./login.scss";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock Authentication Logic
    if (email === "admin" && password === "admin") {
      const user = { email, password, role: "admin" };
      dispatch({ type: "LOGIN", payload: user });
      navigate("/dashboard");
    } else if (email === "user" && password === "user") {
      const user = { email, password, role: "user" };
      dispatch({ type: "LOGIN", payload: user });
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <h2>Sign In</h2>
        <input
          type="text"
          placeholder="username (admin / user)"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password (admin / user)"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  );
};

export default Login;
