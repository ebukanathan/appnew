import React from "react";

function TwoColContainer({ children }) {
  return (
    <div className="w-4/5 my-20 mx-auto grid grid-cols-1  gap-5 rounded-lg md:grid-cols-2">
      {children}
    </div>
  );
}

export default TwoColContainer;
