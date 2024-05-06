import { motion } from "framer-motion"
import classes from "./NewHomePage.module.css"
import { Link } from 'react-router-dom';

const springWords = ['Hi!', "I'm ", 'Ben.'];

const NewHomePage = () => {

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
                Welcome to my website. I'm learning the basics of front-end development as I go,
                so everything is subject to change.
                If you'd like to explore, check out some of the pages below. :)
            </motion.div>
            <motion.div className={classes.buttons}>
                    <Link className={classes.button} type='button' to='/about'>About</Link>
                    <Link className={classes.button} type='button' to='/contact'>Contact</Link>
                    <Link className={classes.button} type='button' to='/projects'>Projects</Link>
                    <Link className={classes.button} type='button' to='/interests'>Interests</Link>
            </motion.div>


        </div>
    );

};

export default NewHomePage