import { motion } from "framer-motion"
import classes from "./NewHomePage.module.css"

const springWords = ['Hi', '! ', "I'm ", 'Ben', '.'];

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
                Welcome to my website. If you'd like to explore, check out some of the pages below. :)
            </motion.div>
            <motion.div className={classes.buttons}>

            </motion.div>


        </div>
    );

};

export default NewHomePage