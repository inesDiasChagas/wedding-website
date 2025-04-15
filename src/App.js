import { useState } from "react";
import { UserType } from "./utils/User";
import LoginForm from "./components/LoginForm/LoginForm";
import AuthenticatedApp from "./pages/AuthenticatedApp";
import React from "react";

function App() {
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState("");

  const handleLogin = ({ username, password }) => {
    if (username === "a" && password === "a") {
      const userInfo = {
        name: "Guest",
        type: UserType.ADMIN,
      };
      setUser(userInfo);
      setLoginError("");
    } else {
      setLoginError("Credenciais inválidas");
    }
  };

  return (
    <React.Fragment>
      {user ? (
        <AuthenticatedApp user={user} />
      ) : (
        <LoginForm onSubmit={handleLogin} error={loginError} />
      )}
    </React.Fragment>
  );
}

export default App;
