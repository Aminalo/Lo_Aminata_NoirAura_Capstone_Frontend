import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/authContext";

const SignUp = ({ setNewUser }) => {
  const { signUp } = useAuth();
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (formData.password !== formData.password2)
        throw new Error("Passwords do not match");

      await signUp(formData);
      nav("/salons");
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className="forms">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Full name"
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          minLength="6"
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          name="password2"
          placeholder="Confirm password"
          onChange={handleChange}
          minLength="6"
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{" "}
        <button onClick={() => setNewUser(false)}>Sign In</button>
      </p>
    </div>
  );
};

export default SignUp;