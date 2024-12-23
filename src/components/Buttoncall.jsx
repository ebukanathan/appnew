import React from "react";

function Buttoncall({ children }) {
  return (
    <div className=" w-1/2 max-w-36  mx-auto  tracking-wider my-5 p-2 text-white bg-red-700 rounded-md border-none capitalize text-center hover:opacity-75">
      {children}
    </div>
  );
}

export default Buttoncall;
