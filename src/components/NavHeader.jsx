import classes from './NavHeader.module.css';
import SettingsButton from './SettingsButton';
import NavButton from './NavButton';

const NavHeader = () => {
    return (
        <nav className={classes.header}>
            <ul>
                <NavButton text='Home'/>
                <NavButton text='Contact'/>
                <NavButton text='Projects'/>
                <SettingsButton />
                <NavButton icon='../../images/github-mark.png' />
            </ul>
        </nav>
    );
};

export default NavHeader