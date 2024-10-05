import { Container, Flex } from "@chakra-ui/react";
import "./TimerPage.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const TimerPage = ({ duration, onFinish }) => {
  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div className="timer-text"> Hold your breath!</div>
        <div className="time">{time}</div>
        <div className="dimension">{dimension}</div>
      </div>
    );
  };

  return (
    <Container w={"100%"}>
      <Flex
        w={"100%"}
        height={"100vh"}
        alignContent={"center"}
        justifyContent={"center"}
        direction={"column"}
      >
        <div className="timer">
          <CountdownCircleTimer
            isPlaying
            duration={duration}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[7, 5, 2, 0]}
            onComplete={onFinish}
          >
            {({ color, remainingTime }) => (
              <span style={{ color }}>
                {renderTime("seconds", remainingTime)}
              </span>
            )}
          </CountdownCircleTimer>
        </div>
      </Flex>
    </Container>
  );
};

export default TimerPage;
