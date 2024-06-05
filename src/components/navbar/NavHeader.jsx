import { Link } from 'react-router-dom';
import React from 'react';
import { motion } from 'framer-motion';
import classes from './NavHeader.module.css';

const Reference = React.forwardRef((props, ref) => (
    <Link ref={ref} {...props} />
  ));

const MotionLink = motion(Reference);

const Links = () => {
    const items = [
        ["Home", "/"], 
        ["About", "/about"], 
        ["Contact", "/contact"], 
        ["Projects", "/projects"], 
        ["Interests", "/interests"]
    ]
    

    return (
        <div className={classes.navbar}>
            <div className={classes.wrapper}>
                <div className={classes.internallinks}>
                    {items.map((item) => (
                        <MotionLink to={item[1]} className={classes.button}>
                            {item[0]}
                        </MotionLink>
                    ))}
                </div>
                <div className={classes.externallinks}>
                    <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                    href='#'><img src='../../images/mail-icon-black.png'/></motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                    href='#'><img src='../../images/github-logo-black.png'/></motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                    href='#'><img src='../../images/linkedin-logo-black.png'/></motion.a>
                </div>
            </div>
        </div>
    );
};

export default Links