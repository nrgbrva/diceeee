import { useState } from "react";

function Dice() {
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);
  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = (x) => {
    console.log(x.key);
    if (x.key === " ") {
      setNum(randomNumberInRange(1, 5));
      setNum1(randomNumberInRange(1, 5));
    }
  };
  window.onkeypress = handleClick;
  return (
    <div>
      <h2>
        number is: {num} {num1}
      </h2>
      <button>Generate random number</button>
    </div>
  );
}

export default Dice;
