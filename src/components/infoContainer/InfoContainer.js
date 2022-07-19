import classes from './InfoContainer.module.css';

const InfoContainer = props => {
  return (
    <div className={classes.infoContainer}>
      <h2>{props.data === 'skills' ? 'Skills' : props.data.title}</h2>
      <p>{props.data.text}</p>
      {props.data === 'skills' ? (
        <ul>
          <li>HTML</li>
          <li>CSS / SCSS</li>
          <li>Javascript / jQuery</li>
          <li>React / Redux</li>
          <li>Bootstrap</li>
          <li>C#</li>
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

export default InfoContainer;
