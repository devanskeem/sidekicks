import React from "react";
// import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div className="reset loginmain">
        <button>
          <a
            href="http://localhost:3333/auth/google"
          >
            Login
          </a>
        </button>
        <div>
          <a href="http://localhost:3333/auth/logout">Logout</a>
        </div>
      </div>
    </div>
  );
}