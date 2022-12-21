import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react'
import { AiFillCamera } from 'react-icons/ai';
import styles from './ImageInput.module.css';
const ImageInput = ({image , setImage}) => {

 function handleImageUpdate(e){
 
    console.log(e.target.files)

    const reader = new FileReader();


    reader.onload = ()=>{


    if(reader.result){
        setImage(reader.result);
    }

    }

    reader.readAsDataURL(e.target.files[0]);
      }

    return (
    <>
  <div className={styles.ImageInput}>


<Box>
<input name="imgInput" id='imgInput' hidden accept="image/*" type="file"  onChange={handleImageUpdate} />
<Button htmlFor='imgInput' as={'label'} w='full' rightIcon={  <AiFillCamera style={{fontSize:'20px'}} />}> Select Image</Button>
</Box>

<div className={styles.preview}>
{
    image && <div className={styles.previewBox}><img className={styles.previewImg} src={image} alt="Preview" /></div>
}
{
    !image && <Text align={'center'}> No Image to Show</Text>
}
</div>
  </div>
    
    </>
  )
}

export default ImageInput