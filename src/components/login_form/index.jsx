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
    <form className="auth-form" onSubmit={handleSubmit} onChange={handleChange} autoComplete="off">
      <div>
        <label htmlFor="email">Email</label>
        <input className="auth-input" type="email" id="email" name="email" placeholder="you@example.com" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input className="auth-input" type="password" id="password" name="password" placeholder="••••••••" />
      </div>

      <button className="auth-submit" type="submit">Sign in</button>
    </form>
  );
};

export default LoginForm;