import { useState } from "react";
import SessionSettingPage from "./pages/SessionSettingPage";
import SecondsSettingPage from "./pages/SecondsSettingPage";
import TimerPage from "./pages/TimerPage";

const App = () => {
  const [roundsAmount, setRoundsAmount] = useState(null);
  const [lastSecondsToHoldBreath, setLastSecondsToHoldBreath] = useState(0);
  const [secondsToHoldBreath, setSecondsToHoldBreath] = useState(0);

  const finishTimer = () => {
    setLastSecondsToHoldBreath(secondsToHoldBreath);
    setSecondsToHoldBreath(0);
  };

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
      <TimerPage duration={secondsToHoldBreath} onFinish={finishTimer} />
    </>
  );
};

export default App;
