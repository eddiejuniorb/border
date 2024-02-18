import React, { useState } from "react";
import Wrapper from "../Wrapper";
import Text from "../Forms/Text";
import logo from "../assets/logoblack.png";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
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
    try {
    } catch (error) {

    }
  };

  return (
    <Wrapper>
      <div className="h-screen flex justify-center items-center">
        <div className="mx-auto w-auto max-w-6xl">
          <div className="mb-20">
            <img src={logo} alt="" className="h-8" />
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold">
            Create an account
          </h1>

          <p className="mt-5 text-gray-500">
            Unlock Your Kid's Basketball Potential: Sign Up Now
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-5 mt-8">
            <Text
              title="Firstname"
              id="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
            />
            <Text
              title="Lastname"
              id="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
            />
            <Text
              title="Email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Text
              title="Phone"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <Text
              title="Password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-8">
            <button
              onClick={handleSubmitForm}
              className="bg-orange-500 py-3 text-white font-medium rounded-md px-16"
            >
              Register
            </button>
            <p className="mt-3 text-gray-500 text-sm flex items-center gap-2">
              Already have an account?
              <Link className="text-orange-600 font-medium" to="/login">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Register;
