import classes from './NavHeader.module.css';
import SettingsButton from './SettingsButton';
import NavButton from './NavButton';

const NavHeader = () => {
    return (
        <nav className={classes.header}>
            <ul className={classes.internallinks}>
                <NavButton text='Home' path='/'/>
                <NavButton text='About' path='/about'/>
                <NavButton text='Contact' path='/contact'/>
                <NavButton text='Projects' path='/projects'/>
                <NavButton text='Interests' path='/interests'/>
            </ul>
            <ul className={classes.externallinks}>
                {/*<SettingsButton />*/}
                <NavButton icon='../../images/gmailicon.png' />
                <NavButton icon='../../images/github-mark.png' />
                <NavButton icon='../../images/LI-In-Bug.png' />
            </ul>
        </nav>
    );
};

export default NavHeader