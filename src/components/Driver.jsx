import React from "react";

const Driver = props => {
  return (
    <div>
      <img src={props.image} alt={props.alter} width="150" height="150" />
      <h2>{props.name}</h2>
      <p>{props.tel}</p>
    </div>
  );
};

export default Driver;
