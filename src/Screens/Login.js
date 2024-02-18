import React, { useState } from "react";
import Text from "../Forms/Text";
import Wrapper from "../Wrapper";
import { Link } from "react-router-dom";
import logo from "../assets/logoblack.png";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //   Form Input Change

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  //   submit form

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Wrapper>
      <div className="h-screen flex justify-center items-center">
        <div className="mx-auto w-auto max-w-6xl">
          <div className="mb-20">
            <img src={logo} alt="" className="h-8" />
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold">
            Log in to you account
          </h1>

          <p className="mt-5 text-gray-500">Welcome back!</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-5 mt-8">
            <Text
              title="Email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Text
              title="Email"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <Link className="mt-3 text-gray-500 text-sm flex items-center gap-2">
            Forgot password?
          </Link>

          <div className="mt-8">
            <button
              onClick={handleSubmitForm}
              className="bg-orange-500 py-3 text-white font-medium rounded-md px-16"
            >
              Login
            </button>
            <p className="mt-3 text-gray-500 text-sm flex items-center gap-2">
              Don't have an account?
              <Link className="text-orange-600 font-medium" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Login;
