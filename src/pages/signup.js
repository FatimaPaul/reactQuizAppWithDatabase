import { useState } from "react";
import { SignUpMethod } from "../config/firebasemethods";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [signUpState, setSignUpState] = useState({});
  const navigate = useNavigate();

  function handleSubmitSignUp(e) {
    e.preventDefault();
    SignUpMethod(signUpState)
      .then((res) => {
        if (res === "admin") {
          navigate(`/adminlogin`);
        } else {
          navigate(`/login`);
        }
      })
      .catch((err) => console.log("not proceeded to login page"));
  }

  return (
    <form onSubmit={handleSubmitSignUp}>
      <h1>SignUp</h1>
      <div>
        <h4>Username</h4>
        <input
          type="text"
          value={signUpState.username ? signUpState.username : ""}
          onChange={(e) =>
            setSignUpState({ ...signUpState, username: e.target.value })
          }
        />
      </div>

      <div>
        <h4>Email</h4>
        <input
          type="email"
          value={signUpState.email ? signUpState.email : ""}
          onChange={(e) =>
            setSignUpState({ ...signUpState, email: e.target.value })
          }
        />
      </div>

      <div>
        <h4>Password</h4>
        <input
          type="password"
          value={signUpState.password ? signUpState.password : ""}
          onChange={(e) =>
            setSignUpState({ ...signUpState, password: e.target.value })
          }
        />
      </div>

      <div>
        <h4>Roll</h4>
        <select
          value={signUpState.roll ? signUpState.roll : "user"}
          onChange={(e) =>
            setSignUpState({ ...signUpState, roll: e.target.value })
          }
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div>
        <h4>Full Name</h4>
        <input
          type="text"
          value={signUpState.fullname ? signUpState.fullname : ""}
          onChange={(e) =>
            setSignUpState({ ...signUpState, fullname: e.target.value })
          }
        />
      </div>

      <button>SignUp</button>
    </form>
  );
}
