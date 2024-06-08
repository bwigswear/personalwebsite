import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import classes from './SectionLinks.module.css';

const SectionLinks = () => {

    const linkLists = {
        "/about" : ["about1", "about2", "about3"],
        "/contact" : ["contact1", "contact2", "contact3"],
        "/projects" : ["projects1", "projects2", "projects3"],
        "/interests" : ["interests1", "interest2", "interest3"],
    };

    const linkList = linkLists[useLocation().pathname];

    return (<motion.div className={classes.links}>
        {linkList.map(link =>(
            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            href={`#${link}`} key={link}>{link}</motion.a>
        ))}
    </motion.div>);
}

export default SectionLinks