import { Container, Flex, Heading } from "@chakra-ui/react";

const EndSessinoPage = () => {
  return (
    <Container w={"100%"}>
      <Flex
        w={"100%"}
        height={"100vh"}
        alignContent={"center"}
        justifyContent={"center"}
        direction={"column"}
      >
        <Heading textAlign={"center"}>Thank you for your session!</Heading>
      </Flex>
    </Container>
  );
};

export default EndSessinoPage;
