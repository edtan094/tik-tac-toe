import React, { useEffect } from "react";

export default function WinCounter({winner, winCount, setWinCount}){

  useEffect(() => {
    if (winner !== null) {
      setWinCount({ ...winCount, [winner]: winCount[winner] + 1 })
    }
  }, [winner])

  return (
    <>
      <div>Win count</div>
      <div>X:{winCount.X}</div>
      <div>O:{winCount.O}</div>
    </>
  )
}
