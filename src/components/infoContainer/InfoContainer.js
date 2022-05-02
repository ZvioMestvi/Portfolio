import classes from './InfoContainer.module.css';

const InfoContainer = props => {
  return (
    <div className={classes.infoContainer}>
      <h2>{props.data === 'skills' ? 'Skills' : props.data.title}</h2>
      <p>{props.data.text}</p>
      {props.data === 'skills' ? (
        <ul>
          <li>
            <p>
              HTML - <span id={classes.html}>[#########- | 90%]</span>
            </p>
          </li>
          <li>
            <p>
              CSS / SCSS - <span id={classes.css}>[########-- | 80%]</span>
            </p>
          </li>
          <li>
            <p>
              Javascript / jQuery -{' '}
              <span id={classes.js}>[########-- | 80%]</span>
            </p>
          </li>
          <li>
            <p>
              React / Redux - <span id={classes.react}>[########-- | 80%]</span>
            </p>
          </li>
          <li>
            <p>
              Bootstrap - <span id={classes.bootstrap}>[#####----- | 50%]</span>
            </p>
          </li>
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

export default InfoContainer;
