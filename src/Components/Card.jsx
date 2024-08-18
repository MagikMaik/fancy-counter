import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import ButtonContainer from "./ButtonContainer";
import { useEffect, useState } from "react";
import CountButton from "./CountButton";
export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 7 ? true : false;

  useEffect(() => {
    const handlekeydown = (e) => {
      if (e.code === "space") {
        const newCount = count + 1;
        if (newCount > 7) {
          setCount(7);
          return;
        }
        setCount(newCount);
      }
    };
    window.addEventListener("keydown", handlekeydown);
    return () => {
      window.removeEventListener("keydown", handlekeydown);
    };
  }, [count]);
  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton locked={locked} type="minus" setCount={setCount} />
        <CountButton locked={locked} type="plus" setCount={setCount} />
      </ButtonContainer>
    </div>
  );
}
