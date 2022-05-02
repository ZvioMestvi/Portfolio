import classes from './Menu.module.css';

const Menu = props => {
  return (
    <div className={classes.menuContainer}>
      <ul>
        <li onClick={props.selector.bind(null, 0)}>About Me</li>
        <li onClick={props.selector.bind(null, 1)}>Education</li>
        <li onClick={props.selector.bind(null, 'projects')}>Projects</li>
        <li onClick={props.selector.bind(null, 'skills')}>Skills</li>
      </ul>
    </div>
  );
};

export default Menu;
