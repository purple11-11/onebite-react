import { useState } from "react";

const Viewer = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>현재 카운트: </p>
      <h3>{counter}</h3>
    </div>
  );
};
export default Viewer;
