import classes from './ButtonList.module.css';//ex: className={classes.*}

const ButtonList = () => {
    return (
        <ul>
            <Button text='Programming Projects'/>
            <Button text='Professional Interests'/>
            <Button text='Personal Interests'/>
        </ul>
    );
};

export default ButtonList;