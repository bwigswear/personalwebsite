import classes from './HomePageLeft.module.css';

const HomePageLeft = () =>{

    return (
        <div className={classes.leftbox}>
            <h1>Hi, I'm Ben!</h1>
            <p>
                I'd like to welcome you to my personal website. I'm an aspiring software engineer
                with specific interests in ___ and ___. I've got experience working with various languages
                and tools such as ___, ___, ___, etc. I'm <b>always</b> looking to improve on what I already
                know and learn what I don't, especially in the realm of Computer Science. To that end, if
                you see anything about this website or any of my other listed projects that you feel could
                be improved upon, feel free to contact me through any means provided on this website.
            </p>
            <p>
                This website is currently in its infancy as I learn the basics of web development. The tools I'm 
                using include _____ for hosting, _____ for front-end development, and _____ for
                styling.
            </p>
        </div>
    );
};

export default HomePageLeft