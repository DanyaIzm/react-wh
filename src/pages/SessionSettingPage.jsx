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

const SessionSettingPage = ({ onRoundsSelected }) => {
  const [rounds, setRounds] = useState(0);
  const [isError, setIsError] = useState("");

  console.log(rounds);

  const submitRounds = () => {
    if (rounds <= 0) {
      setIsError(true);
    } else {
      onRoundsSelected(rounds);
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
            <FormLabel>Amount of rounds</FormLabel>
            <Input
              placeholder="over 900"
              type="number"
              onChange={(e) => setRounds(parseInt(e.target.value))}
            />
            <FormErrorMessage>Invalid number of rounds</FormErrorMessage>
          </FormControl>
          <Button colorScheme="teal" onClick={submitRounds}>
            Button
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default SessionSettingPage;
