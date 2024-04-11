import classes from './Button.module.css';//ex: className={classes.*}

const Button = (props) => {
    return (
    <button>
        {props.text}
    </button>
    );

}

export default Button;