import { Link } from 'react-router-dom';
import classes from './NavButton.module.css';

const NavButton = (props) => {
    
    if ('icon' in props){
        return (
            <a href={props.link}>
                <img src={props.icon} className={classes.icon}/>
            </a>
        );
    }else{
        return (
        <Link className={classes.button} type='button' to={props.path}>
            {props.text}
        </Link>
        );
    };

};

export default NavButton