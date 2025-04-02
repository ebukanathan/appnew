import React, { useEffect } from "react";

function Redirect({ url }) {
  useEffect(() => {
    window.location.href = url;
  }, [url]);
  return (
    <div className="text-center w-1/2 mx-auto">
      <h2>Redirecting.....</h2>
    </div>
  );
}

export default Redirect;
