import { useState } from "react";
import { useAuth } from "../../contexts/authContext/authContext";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setNewUser }) => {
  const { login } = useAuth();
  const nav = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(formData);
      nav("/salons");
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className="forms">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} onChange={handleChange} autoComplete="off">
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" placeholder="Email" />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          minLength="6"
        />
        <input type="submit" value="Log In" />
      </form>
      <p>
        Don’t have an account?{" "}
        <button onClick={() => setNewUser(true)}>Sign Up</button>
      </p>
    </div>
  );
};

export default LoginForm;