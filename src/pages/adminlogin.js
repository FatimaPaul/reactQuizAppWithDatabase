import { useState } from "react";
import { LoginMethod } from "../config/firebasemethods";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [adminLoginState, setAdminLoginState] = useState({});
  const navigate = useNavigate();

  function handleSubmitAdminLogin(e) {
    e.preventDefault();
    LoginMethod(adminLoginState)
      .then((res) => navigate("/admin"))
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={handleSubmitAdminLogin}>
      <h1>Admin Login</h1>
      <div>
        <h4>Email</h4>
        <input
          type="email"
          value={adminLoginState.email ? adminLoginState.email : ""}
          onChange={(e) =>
            setAdminLoginState({ ...adminLoginState, email: e.target.value })
          }
        />
      </div>

      <div>
        <h4>Password</h4>
        <input
          type="password"
          value={adminLoginState.password ? adminLoginState.password : ""}
          onChange={(e) =>
            setAdminLoginState({ ...adminLoginState, password: e.target.value })
          }
        />
      </div>
      <button>Login</button>
    </form>
  );
}
