import classes from './NavHeader.module.css';
import SettingsButton from './SettingsButton';
import NavButton from './NavButton';

const NavHeader = () => {
    return (
        <nav className={classes.header}>
            <ul className="internal-links">
                <NavButton text='Home'/>
                <NavButton text='About'/>
                <NavButton text='Contact'/>
                <NavButton text='Projects'/>
            </ul>
            <ul className="external-links">
                {/*<SettingsButton />*/}
                <NavButton icon='../../images/gmailicon.png' />
                <NavButton icon='../../images/github-mark.png' />
                <NavButton icon='../../images/LI-In-Bug.png' />
            </ul>
        </nav>
    );
};

export default NavHeader