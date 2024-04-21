import classes from './HomePageRight.module.css';
import HomePageButton from './HomePageButton.jsx';

const HomePageRight = () =>{

    return (
        <div className={classes.rightbox}>

            <h1>Dive Deeper...</h1>
            <ul>
                <HomePageButton text='Who Am I?'/>
                <HomePageButton text='Get in Contact'/>
                <HomePageButton text='Some of my Goals'/>
                <HomePageButton text='Programming Projects'/>
                <HomePageButton text='Other Projects'/>
                <HomePageButton text='Personal Interests'/>
            </ul>
        </div>
    );
};

export default HomePageRight