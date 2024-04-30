import { Link } from 'react-router-dom';
import classes from './NavHeader.module.css';

const NavHeader = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.wrapper}>
                <ul className={classes.internallinks}>
                    <Link className={classes.button} type='button' to='/'>Home</Link>
                    <Link className={classes.button} type='button' to='/about'>About</Link>
                    <Link className={classes.button} type='button' to='/contact'>Contact</Link>
                    <Link className={classes.button} type='button' to='/projects'>Projects</Link>
                    <Link className={classes.button} type='button' to='/interestss'>Interests</Link>
                </ul>
                <ul className={classes.externallinks}>
                    {/*<SettingsButton />*/}
                    <a href='#'><img src='../../images/mail-icon-black.png'/></a>
                    <a href='#'><img src='../../images/github-logo-black.png'/></a>
                    <a href='#'><img src='../../images/linkedin-logo-black.png'/></a>
                </ul>
            </div>
        </div>
    );
};

export default NavHeader