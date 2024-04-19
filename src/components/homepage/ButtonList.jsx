import classes from './ButtonList.module.css';//ex: className={classes.*}

const ButtonList = () => {
    return (
        <ul>
            <button text='Programming Projects'/>
            <button text='Professional Interests'/>
            <button text='Personal Interests'/>
        </ul>
    );
};

export default ButtonList;