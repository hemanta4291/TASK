import React from "react";

const NotFound = ({ msg = "No items found" }) => {
  return (
    <div className="text-3xl text-secondary w-full h-full flex justify-center items-center">
      {msg}
    </div>
  );
};

export default NotFound;
