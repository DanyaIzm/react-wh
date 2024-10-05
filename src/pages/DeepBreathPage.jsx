import { Button, Container, Flex, Heading, Stack } from "@chakra-ui/react";

const DeepBreathPage = ({ onFinish }) => {
  return (
    <Container w={"100%"}>
      <Flex
        w={"100%"}
        height={"100vh"}
        alignContent={"center"}
        justifyContent={"center"}
        direction={"column"}
      >
        <Stack spacing={4}>
          <Heading size={"lg"} textAlign={"center"}>
            Now do a deep breath and push the button below!
          </Heading>
          <Button onClick={onFinish}>Finish</Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default DeepBreathPage;
