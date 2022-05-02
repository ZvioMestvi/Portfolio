import classes from './ProjectsList.module.css';

const ProjectsList = props => {
  return (
    <div className={classes.listContainer}>
      <div onClick={props.selector.bind(null, 0)}>Forkify</div>
      <div onClick={props.selector.bind(null, 1)}>Mapty</div>
      <div onClick={props.selector.bind(null, 2)}>GNM</div>
      <div onClick={props.selector.bind(null, 3)}>Bankist</div>
    </div>
  );
};

export default ProjectsList;
