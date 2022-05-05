import classes from './Menu.module.css';

const Menu = props => {
  return (
    <div className={classes.menuContainer}>
      <ul>
        <li
          className={props.selected === 0 ? classes.selected : ''}
          onClick={props.selector.bind(null, 0)}
        >
          About Me
        </li>
        <li
          className={props.selected === 1 ? classes.selected : ''}
          onClick={props.selector.bind(null, 1)}
        >
          Education
        </li>
        <li
          className={props.selected === 'projects' ? classes.selected : ''}
          onClick={props.selector.bind(null, 'projects')}
        >
          Projects
        </li>
        <li
          className={props.selected === 'skills' ? classes.selected : ''}
          onClick={props.selector.bind(null, 'skills')}
        >
          Skills
        </li>
      </ul>
    </div>
  );
};

export default Menu;
