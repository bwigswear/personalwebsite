import classes from './ProjectsPage.module.css';


const ProjectsPage = () => {

    const projects = ["p1", "p2", "p3", "p4"];



    return(
        <div className={classes.container}>
            <div>{projects.map((label) => (<a href={`#${label}`}>{label}</a>))}s</div>
            <section id="p1">Project1</section>
            <section id="p2">Project2</section>
            <section id="p3">Project3</section>
            <section id="p4">Project4</section>
        </div>
    );
};


export default ProjectsPage