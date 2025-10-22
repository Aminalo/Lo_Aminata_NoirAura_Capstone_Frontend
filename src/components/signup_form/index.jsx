import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/authContext";

const SignUp = ({ setNewUser }) => {
  const { signUp } = useAuth();
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    name: "", email: "", password: "", password2: ""
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (formData.password !== formData.password2) throw new Error("Passwords do not match");
      await signUp(formData);
      nav("/salons");
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit} autoComplete="off">
      <div>
        <label htmlFor="name">Full name</label>
        <input className="auth-input" onChange={handleChange} type="text" id="name" name="name" placeholder="Aminata Lo" />
      </div>

      <div>
        <label htmlFor="email1">Email</label>
        <input className="auth-input" onChange={handleChange} type="email" id="email1" name="email" placeholder="you@example.com" />
      </div>

      <div>
        <label htmlFor="password1">Password</label>
        <input className="auth-input" onChange={handleChange} type="password" id="password1" name="password" placeholder="••••••••" minLength="6" />
      </div>

      <div>
        <label htmlFor="password2">Confirm password</label>
        <input className="auth-input" onChange={handleChange} type="password" id="password2" name="password2" placeholder="••••••••" minLength="6" />
      </div>

      <button className="auth-submit" type="submit">Create account</button>
    </form>
  );
};

export default SignUp;