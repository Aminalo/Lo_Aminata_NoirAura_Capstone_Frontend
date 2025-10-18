import { useState } from "react";
import LoginForm from "../../components/login_form/index";
import SignUp from "../../components/signup_form/index";

const AuthPage = () => {
  const [newUser, setNewUser] = useState(false);

  return (
    <div className="auth-container">
      {newUser ? (
        <SignUp setNewUser={setNewUser} />
      ) : (
        <LoginForm setNewUser={setNewUser} />
      )}
    </div>
  );
};

export default AuthPage;