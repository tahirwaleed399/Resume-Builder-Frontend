import React from 'react'
import {motion} from 'framer-motion'
const animationConfiguration = {
    initial: { opacity: 0 , x:'-100%' },
    animate: { opacity: 1 ,x:0, transition :{
        duration : 0.6
    }},
    exit: { opacity: 0  , x:'-100%'},
};
const Transition = ({ children }) => {
  return (

      <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            // transition={{ duration: 3 }}
        >
            {children}
        </motion.div>
  )
}

export default Transition