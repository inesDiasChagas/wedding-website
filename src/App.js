import { useState } from "react";
import { UserType } from "./utils/User";
import LoginForm from "./components/LoginForm/LoginForm";
import AuthenticatedApp from "./pages/AuthenticatedApp";

function App() {
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState("");

  const handleLogin = ({ username, password }) => {
    if (username === "guest" && password === "wedding123") {
      const userInfo = {
        name: "Guest",
        type: UserType.ADMIN,
      };
      setUser(userInfo);
      setLoginError("");
    } else {
      setLoginError("Invalid username or password");
    }
  };

  return (
    <div>
      {user ? (
        <AuthenticatedApp user={user} />
      ) : (
        <LoginForm onSubmit={handleLogin} error={loginError} />
      )}
    </div>
  );
}

export default App;
