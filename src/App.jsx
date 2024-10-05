import { useState } from "react";
import SessionSettingPage from "./pages/SessionSettingPage";
import SecondsSettingPage from "./pages/SecondsSettingPage";
import TimerPage from "./pages/TimerPage";
import DeepBreathPage from "./pages/DeepBreathPage";
import EndSessinoPage from "./pages/EndSessionPage";

const App = () => {
  const [roundsAmount, setRoundsAmount] = useState(null);
  const [lastSecondsToHoldBreath, setLastSecondsToHoldBreath] = useState(0);
  const [secondsToHoldBreath, setSecondsToHoldBreath] = useState(0);
  const [isInterbreathing, setIsInterbreathing] = useState(false);
  const [isAfterholding, setIsAfterholding] = useState(false);
  const [isBreathingBeforeAfterholding, setIsBreathingBeforeAfterholding] =
    useState(false);

  const afterDeepBreath = () => {
    setIsBreathingBeforeAfterholding(false);
    setIsAfterholding(true);
  };

  const finishTimer = () => {
    setIsBreathingBeforeAfterholding(true);
  };

  const finishAfterholding = () => {
    setIsAfterholding(false);
    setLastSecondsToHoldBreath(secondsToHoldBreath);
    setSecondsToHoldBreath(0);
    setRoundsAmount(roundsAmount - 1);
  };

  const onSecondsSelected = (seconds) => {
    setIsInterbreathing(true);
    setSecondsToHoldBreath(seconds);
  };

  if (roundsAmount !== null && roundsAmount <= 0) {
    return <EndSessinoPage />;
  }

  if (isBreathingBeforeAfterholding) {
    return <DeepBreathPage onFinish={afterDeepBreath} />;
  }

  if (isAfterholding) {
    return <TimerPage duration={3} onFinish={finishAfterholding} />;
  }

  if (roundsAmount === null) {
    return <SessionSettingPage onRoundsSelected={setRoundsAmount} />;
  }

  if (secondsToHoldBreath === 0) {
    return (
      <SecondsSettingPage
        initialValue={lastSecondsToHoldBreath}
        onSecondsSelected={onSecondsSelected}
      />
    );
  }

  return <TimerPage duration={secondsToHoldBreath} onFinish={finishTimer} />;
};

export default App;
