import { useState, useEffect, useMemo } from "./MyReact.js";

export default function Component({ propCount, btnEle }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const handler = () => {
      setCount((currentValue) => currentValue + 1);
    };
    btnEle.addEventListener("click", handler);

    return () => btnEle.removeEventListener("click", handler);
  }, [btnEle]);

  const propCountDoubled = useMemo(() => {
    console.log("From the Memo");
    return propCount * 2;
  }, [propCount]);

  return `
        State: ${count}
        Prop: ${propCount}
        Prop Doubled: ${propCountDoubled}
    `;
}
