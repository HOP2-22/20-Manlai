import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  const timeShower = {
    timeText: {
      fontWeight: "bold",
      fontSize: "100px",
      color: "white",
    },
  };

  useEffect(() => {
    let interval = undefined;

    if (start) {
      interval = setInterval(() => {
        setTime((pre) => pre + 1);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [start]);

  return (
    <div style={{ background: "black" }}>
      <div style={timeShower.timeText}>
        {Math.floor(time / 6000)}:{Math.floor(time / 100) % 60}:{time % 100}
      </div>
      <button onClick={() => setStart(true)}>start</button>
      <button onClick={() => setStart(false)}>stop</button>
      <button onClick={() => setTime(0)}>reset</button>
    </div>
  );
}

export default App;
