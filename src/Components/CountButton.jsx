import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ locked, type, setCount }) {
  const handleclick = (event) => {
    setCount((prevCount) => {
      if (type === "plus") {
        const newCount = prevCount + 1;
        if (newCount > 7) {
          return 7;
        }
        return newCount;
      } else {
        const newCount = prevCount - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      }
    });
    event.currentTarget.blur();
  };
  return (
    <button disabled={locked} onClick={handleclick} className="count-btn">
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
