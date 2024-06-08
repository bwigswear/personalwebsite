import classes from './ProjectsPage.module.css';
import PageSection from '../PageSection.jsx';


const ProjectsPage = () => {

    const projects = ["p1", "p2", "p3", "p4"];



    return(
        <div className={classes.container}>
            <PageSection id="projects1">Project1</PageSection>
            <PageSection id="projects2">Project2</PageSection>
            <PageSection id="projects3">Project3</PageSection>
            <PageSection id="projects4">Project4</PageSection>
        </div>
    );
};


export default ProjectsPage