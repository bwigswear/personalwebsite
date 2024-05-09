import { Link } from 'react-router-dom';
import { useState} from 'react';
import { motion } from 'framer-motion';
import classes from './NavHeader.module.css';
import HeaderToggle from './HeaderToggle.jsx';
import NavLinks from './NavLinks';

const NavHeader = () => {

    const [open, setOpen] = useState(false);

    const variants = {
        open: {
            clipPath: "circle(1500px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }
    return (
        <motion.div className={classes.navbar} animate={open ? "open" : "closed"}>
            <motion.div className={classes.background} variants={variants}>
                <NavLinks />
            </motion.div>
            <HeaderToggle className={classes.toggle} setOpen={setOpen}/>
        </motion.div>
    );
};

export default NavHeader