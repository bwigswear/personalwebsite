import classes from './HomePageRight.module.css';
import ButtonList from './ButtonList.jsx';

const HomePageRight = () =>{

    return (
        <div className={classes.rightbox}>

            <h1>Dive Deeper...</h1>
            <ButtonList/>
        </div>
    );
};

export default HomePageRight