import classes from './NavButton.module.css';

const NavButton = (props) => {
    
    if ('icon' in props){
        return (
            <a href={props.link}>
                <img src={props.icon} className={classes.icon}/>
            </a>
        );
    }else{
        return <button className={classes.button}>{props.text}</button>;
    }

}

export default NavButton