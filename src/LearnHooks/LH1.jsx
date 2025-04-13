import { useState } from "react";

function LH1() {
  let [count, setCount] = useState(0);

  const addVal = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const delval = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1>The Count is {count}</h1>
      <button onClick={addVal}>Add</button>
      <button onClick={delval}>Decrease</button>
    </>
  );
}

export default LH1;
