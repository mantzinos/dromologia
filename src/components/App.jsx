import React, { useState } from "react";
import driver from "../staf/drivers.jsx";
import Driver from "./Driver";

const App = () => {
  const [sex, setSex] = useState(driver);
  const [apply, setApply] = useState([]);

  const dose = event => {};

  return (
    <div>
      <ul>
        {sex.map(a => (
          <li onClick={dose}>{a.name}</li>
        ))}
      </ul>
      {apply.map(a => (
        <Driver name={a.name} tel={a.tel} />
      ))}
    </div>
  );
};

export default App;
