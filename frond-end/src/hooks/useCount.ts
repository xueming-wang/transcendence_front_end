import { useState } from "react";

//用在比赛分数增加减少
export function useCount() {
  const [count, setCount] = useState<number>(0);
  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };
  return { count, decrease, increase, reset };
}



//   const [win, setWin] = useState(0);  //win 数量
//   // const WinPlus = () => {
//   // 	setWin((prev) => {
//   // 		return prev + 1;
//   // 	})
//   // }
//   const [Loses, setLoses] = useState(0);  //lose 数量
//   // const LosesPlus = () => {
//   // 	setLoses( function(prev) {
//   // 		return prev + 1;
//   // 	})
//   // }
//   const [Score, setScore] = useState(0);  //socre 分数
  // const ScorePlus = () => {
  // 	setScore( function(prev) {
  // 		return prev + 500;
  // 	})
  // }