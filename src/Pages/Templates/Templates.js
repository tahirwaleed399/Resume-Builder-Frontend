import { Box, Container, Flex, Heading, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Template01 from "../Template01/Template01";
import Template02 from "../Template02/Template02";

const Templates = () => {
  const resumeState = useSelector((state) => state.resume);

  const [resume, setResume] = useState(<Template01 resume={resumeState} />);
  return (
    <Container maxW={"container.lg"}>
      <Heading my={4}>Templates</Heading>

      <Flex
        my={3}
        wrap={"wrap"}
        justifyContent="center"
        alignItems={"center"}
        gap={5}
      >
        <div onClick={() => setResume(<Template02 resume={resumeState} />)}>
  
          <Card img="/Images/CvTemplate1.png"> </Card>
        </div>
        <div onClick={() => setResume(<Template01 resume={resumeState} />)}>
    
          <Card img="/Images/CvTemplate2.png"></Card>
        </div>
      </Flex>
      {resume}
    </Container>
  );
};

// Resume Template Card 
function Card({ img }) {
  return (
    <Box
      cursor={"pointer"}
      transition="all"
      _hover={{
        transform: "scale(1.05)",
      }}
    >
      <Image src={img} boxSize={"xs"} borderRadius={"lg"}></Image>
    </Box>
  );
}

export default Templates;
