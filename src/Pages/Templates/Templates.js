import { Box, Button, Container, Flex, Heading, Image } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useCreateResumeMutation } from "../../Redux/ResumeApi/ResumeApi";
import Template01 from "../Template01/Template01";
import Template02 from "../Template02/Template02";
import { AiFillPrinter, AiFillSave } from "react-icons/ai";
import ReactToPrint from "react-to-print";
import { useLoader } from "../../Hooks/useLoader";
import { useNavigate } from "react-router-dom";
const Templates = () => {
  const navigate = useNavigate();
  const [createResume, createResumeState] = useCreateResumeMutation();
  const resumeState = useSelector((state) => state.resume);

  const [resume, setResume] = useState(<Template01 resume={resumeState} />);
  function saveResume() {
    console.log(resumeState);
    createResume(resumeState);
  }
  const componentRef = useRef();
  useLoader(createResumeState , {loading : "Saving Resume" , success:"Saved"}, ()=>{navigate('/my-resumes')} )
  return (
    <Container maxW={"container.lg"}>
      <Heading my={4}>Templates</Heading>
    
        <Flex justifyContent="flex-end">
           <ReactToPrint
        trigger={() => <Button
          mx={3}
          rightIcon={<AiFillPrinter />}
          colorScheme={"yellow"}
        >
          Print
        </Button>}
        content={() => componentRef.current}
      /> 
        {!resumeState.id && (
          <Button
          onClick={saveResume}
          rightIcon={<AiFillSave />}
          colorScheme={"green"}
        >
          Save
        </Button>
      )}
      
        </Flex>
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
      <div ref={componentRef}>

      {resume}
      </div>
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
