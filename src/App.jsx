import { useState } from "react";
import "./App.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import SessionSettingPage from "./pages/SessionSettingPage";
import SecondsSettingPage from "./pages/SecondsSettingPage";

const App = () => {
  const [roundsAmount, setRoundsAmount] = useState(null);
  const [lastSecondsToHoldBreath, setLastSecondsToHoldBreath] = useState(800);
  const [secondsToHoldBreath, setSecondsToHoldBreath] = useState(0);

  console.log("YAY", roundsAmount);
  console.log("secs", secondsToHoldBreath);

  if (roundsAmount === null) {
    return <SessionSettingPage onRoundsSelected={setRoundsAmount} />;
  }

  if (secondsToHoldBreath === 0) {
    return (
      <SecondsSettingPage
        initialValue={lastSecondsToHoldBreath}
        onSecondsSelected={setSecondsToHoldBreath}
      />
    );
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
