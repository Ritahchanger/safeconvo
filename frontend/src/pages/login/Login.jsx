import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto form-container">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 form-wrapper">
        <h1 className="text-3xl font-semibold text-center title">
          Login<br/>
          <span className="text-blue-500">
            {" "}
            Chat App{" "}
            {/* <img
              src="AES logo.png"
              alt="AES logo"
              width="50"
              height="60"
              className="AESLogo"
            /> */}
          </span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              // className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              // className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm  hover:underline mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <div className="centerMyButton">
            <button
              className="submit-btn"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
          <p>Chat End-to-End Encrypted. Powered by AES-256</p>
        </form>

      </div>
    </div>
  );
};

export default Login;
