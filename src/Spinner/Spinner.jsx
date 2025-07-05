
import React from "react";
import loading from "./loading.gif";
import "../App"

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="text-center">
        <img src={loading} alt="loading" className="" style={{ width: "30px", height: "30px" }} />
        <p>Loading, please wait...</p>
      </div>
    </div>
  );
};

export default Spinner;
