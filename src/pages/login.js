import { useState } from "react";
import { LoginMethod } from "../config/firebasemethods";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loginState, setLoginState] = useState({});
  const navigate = useNavigate();

  function handleSubmitLogin(e) {
    e.preventDefault();
    LoginMethod(loginState).then(res => navigate('/student')).catch(err => console.log(err));
  }

  return (
    <form onSubmit={handleSubmitLogin}>
      <h1>Student Login</h1>
      <div>
        <h4>Email</h4>
        <input
          type="email"
          value={loginState.email ? loginState.email : ""}
          onChange={(e) =>
            setLoginState({ ...loginState, email: e.target.value })
          }
        />
      </div>

      <div>
        <h4>Password</h4>
        <input
          type="password"
          value={loginState.password ? loginState.password : ""}
          onChange={(e) =>
            setLoginState({ ...loginState, password: e.target.value })
          }
        />
      </div>
      <button>Login</button>
    </form>
  );
}
