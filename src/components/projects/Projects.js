import classes from './Projects.module.css';

const Projects = props => {
  return (
    <div className={classes.projectsContainer}>
      <div className={classes.projectContainer}>
        <div className={classes.projectInfo}>
          <h3>{props.data.title}</h3>
          <p>{props.data.description}</p>
        </div>
        <div
          className={classes.thumbnail}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6) 0 0), url(${props.data.thumbnail})`,
          }}
        >
          <button type="button">Visit Page</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
