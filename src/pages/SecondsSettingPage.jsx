import {
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

const SecondsSettingPage = ({ initialValue, onSecondsSelected }) => {
  const [seconds, setSeconds] = useState(initialValue);
  const [isError, setIsError] = useState("");

  console.log(seconds);

  const submitSeconds = () => {
    if (seconds <= 0) {
      setIsError(true);
    } else {
      onSecondsSelected(seconds);
    }
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
        <Stack spacing={3}>
          <FormControl isInvalid={isError}>
            <FormLabel>Amount of seconds to hold breath</FormLabel>
            <Input
              placeholder="over 900"
              type="number"
              onChange={(e) => setSeconds(parseInt(e.target.value))}
              value={seconds !== 0 ? seconds : ""}
            />
            <FormErrorMessage>Invalid number of seconds</FormErrorMessage>
          </FormControl>
          <Button colorScheme="teal" onClick={submitSeconds}>
            Submit
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default SecondsSettingPage;
