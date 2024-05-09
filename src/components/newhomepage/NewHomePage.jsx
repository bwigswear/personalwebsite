import { motion } from "framer-motion";
import classes from "./NewHomePage.module.css";
import { Link } from 'react-router-dom';
import React from 'react';

const springWords = ['Hi!', "I'm ", 'Ben.'];
const labels = [['About', '/about'], ['Contact', '/contact'], ['Projects', '/projects'], ['Interests', '/interests']];

const Reference = React.forwardRef((props, ref) => (
    <Link ref={ref} {...props} />
  ));

const MotionLink = motion(Reference);

const NewHomePage = () => {

    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            staggerChildren: 0.5
          },
        },
      };

    return (
        <div className={classes.mainBox}>
            <motion.div className={classes.intro}>
                {springWords.map((word) => 
                    <motion.span>
                        {word}
                    </motion.span>
                
                )}
            </ motion.div>
            <motion.div className={classes.welcome}>
                Welcome to my website. I'm learning front-end development as I go,
                so everything is subject to change.
                If you'd like to explore, check out some of the pages below. :)
            </motion.div>
            <motion.div className={classes.buttons}>
                {labels.map((label) => (
                        <MotionLink 
                        variants={buttonVariants} initial="hidden" animate="visible"
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                        className={classes.button} to={label[1]}>
                            {label[0]}
                        </MotionLink>
                ))}
            </motion.div>

        </div>
    );

};

export default NewHomePage