import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { GoBell } from "react-icons/go";
import img from './assets/pic.jpg'
import Dashboard from "./Components/Dashboard";
import logo from "./assets/logoblack.png";
import CreateChildren from "./Screens/CreateChildren";
import BuyPlan from "./Screens/BuyPlan";


function Home() {
  return <div className="w-full pb-10">

    {/* Headre */}
    <div className="w-full">
      {/* Header */}
      <div className="bg-white p-5 md:px-10 border-b ">
        <div className="flex items-center justify-between container mx-auto max-w-7xl">
          <Link to='/'> <img src={logo} alt="" className="h-8" /></Link>

          {/* Profile and Notication */}
          <div className="flex items-center gap-5 md:gap-10">
            <div>
              <Link to='/buy-plan' className="bg-blue-700 text-white py-2 px-5 rounded-full text-sm">Buy Plan</Link>
            </div>
            <div><GoBell size={25} /></div>
            <div className="">
              <img src={img} className="w-9 h-9 object-cover rounded-full" alt="" />
            </div>
          </div>
        </div>
      </div>


      {/* Routes */}
      <div className="mx-auto container max-w-7xl">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-beneficial" element={<CreateChildren />} />
          <Route path="/buy-plan" element={<BuyPlan />} />
        </Routes>
      </div>
    </div>
  </div>;
}

export default Home;
