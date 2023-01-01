import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillCamera } from "react-icons/ai"; 
import {readFileAsDataURL} from "../../Utils/ReadDataAsUrl/ReadDataAsUrl";
// used pure css because I want to make this component reusable in other projects as well
import styles from "./ImageInput.module.css";



const ImageInput = ({ image, setImage }) => {



  // function that handles the onChange file 
  async function handleImageUpdate(e) {
    
const result = await readFileAsDataURL(e.target.files[0]);

setImage(result);
  }

  return (
    <>
      <div className={styles.ImageInput}>
        <Box>
          <input
            name="imgInput"
          data-testid='fileInput'
            id="imgInput"
            hidden
            accept="image/*"
            type="file"
            onChange={handleImageUpdate}
          />
         {/* created this button with chakra ui rest all component is pure css */}
          <Button
            htmlFor="imgInput"
            as={"label"}
            w="full"
            rightIcon={<AiFillCamera style={{ fontSize: "20px" }} />}
          >
            {" "}
            Select Image
          </Button>
        </Box>

        <div className={styles.preview}>
          {image && (
            <div className={styles.previewBox}>
              <img className={styles.previewImg} src={image} alt="Preview" />
            </div>
          )}
          {!image && <Text align={"center"}> No Image to Show</Text>}
        </div>
      </div>
    </>
  );
};

export default ImageInput;
