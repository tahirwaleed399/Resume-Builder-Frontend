import { Box } from "@chakra-ui/react";
import React from "react"; 

const Loader = () => {
  return (
    <div className="loader" data-testid='loader'>
      <img src="/Images/loading-rings.gif" alt="Loader" />
    </div>
  );
};

export default Loader;
