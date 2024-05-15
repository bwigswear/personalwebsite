import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import classes from './Sidebar.module.css';
import SidebarToggle from './SidebarToggle.jsx';
import SectionLinks from './SectionLinks.jsx';

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const variants = {
        open: {
            clipPath: "circle(1500px at 3.5rem 2.5rem)",
            transition: {
                type: "spring",
                stiffness: 20,
            }
        },
        closed: {
            clipPath: "circle(0px at 3.5rem 2.5rem)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }

    return (
        <motion.div className={classes.sidebar} animate={open ? "open" : "closed"}>
            <motion.div className={classes.background} variants={variants}>
                <SectionLinks/>
            </motion.div>
            <SidebarToggle className={classes.toggle} setOpen={setOpen}/>
        </motion.div>
    );
}

export default Sidebar;