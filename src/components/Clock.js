"use client";
import { useEffect, useState } from "react";

const Clock = () => {
  const [timer, setTimer] = useState(1510); //Countdown
  const [displayTime, setDisplayTime] = useState();
  const [status, setStatus] = useState(false); //Is it running
  const [mode, setMode] = useState("timer");
  const changeStatus = () => {
    if (status) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  };
  const updateTimer = () => {
    setTimer((prevTimer) => prevTimer - 1);
  };

  useEffect(() => {
    //uE for handling status changes by the buttons
    if (status) {
      setInterval(updateTimer, 1000);
    } else {
    }
  }, [status]);

  useEffect(() => {
    //uE for displaying time
    let minutes = Math.floor(timer / 60);
    let seconds = timer - minutes * 60;
    let paddedSeconds = seconds.toString().padStart(2, "0"); //Purely for visual purposes
    setDisplayTime(`${minutes}:${paddedSeconds}`);
  }, [timer]);

  return (
    <div>
      <div>{displayTime}</div>
      <button
        onClick={() => {
          changeStatus();
        }}
      >
        Start
      </button>
      <button>Skip</button>
    </div>
  );
};

export default Clock;
