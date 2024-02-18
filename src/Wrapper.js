import React from "react";

function Wrapper({ children }) {
  return <div className="bg-white h-full w-full px-5">{children}</div>;
}

export default Wrapper;
