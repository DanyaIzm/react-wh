import { useState } from "react";
import "./App.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import SessionSettingPage from "./pages/SessionSettingPage";

const App = () => {
  const [roundsAmount, setRoundsAmount] = useState(null);

  console.log("YAY", roundsAmount);

  if (roundsAmount === null) {
    return <SessionSettingPage onRoundsSelected={setRoundsAmount} />;
  }

  return (
    <>
      <div className="timer">
        <CountdownCircleTimer
          isPlaying
          duration={7}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
    </>
  );
};

export default App;
