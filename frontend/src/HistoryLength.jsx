import React, { useState, useEffect } from "react";

const HistoryLength = () => {
  const [historyLength, setHistoryLength] = useState([]);

  const checkHistoryLength = () => {
    const currentLength = window.history.length;
    const currentTime = new Date().toLocaleTimeString();

    setHistoryLength((prevState) => [
      ...prevState,
      { length: currentLength, time: currentTime },
    ]);
  };

  // Call checkHistoryLength on component mount
  useEffect(() => {
    checkHistoryLength();
  }, []);

  return (
    <div>
      <button onClick={checkHistoryLength}>Recheck history length</button>
      {historyLength.map((item, index) => (
        <p key={index}>
          Time: {item.time}, History Length: <b>{item.length}</b>
        </p>
      ))}
      <p>
        Try navigating back using browser back button when history length
        changes
      </p>
    </div>
  );
};

export default HistoryLength;
