import { useState } from "react";
import LoginForm from "../../components/login_form/index";
import SignUp from "../../components/signup_form/index";
import "./style.css";                      // NEW line
import bgImg from "../../assets/background.jpg"; // use your white-ish image

const AuthPage = () => {
  const [newUser, setNewUser] = useState(false);

  return (
    <div
      className="auth-wrapper"
    >
      <div className="auth-card">
        <div className="auth-head">
          <h1>{newUser ? "Create your account" : "Welcome back"}</h1>
          <p>{newUser ? "Join NoirAura to glow with us." : "Sign in to continue."}</p>
        </div>

        {newUser ? (
          <SignUp setNewUser={setNewUser} />
        ) : (
          <LoginForm setNewUser={setNewUser} />
        )}

        <div className="auth-switch">
          {newUser ? (
            <>
              Already have an account?{" "}
              <button className="link-btn" onClick={() => setNewUser(false)}>
                Sign in
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button className="link-btn" onClick={() => setNewUser(true)}>
                Sign up
              </button>
            </>
          )}
        </div>
      </div>
      <div className="auth-backdrop" />
    </div>
  );
};

export default AuthPage;