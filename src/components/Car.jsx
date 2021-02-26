import React from "react";

const Car = props => {
  return (
    <div>
      <p>{props.marka}</p>
      <p>{props.pinakida}</p>
    </div>
  );
};

export default Car;
