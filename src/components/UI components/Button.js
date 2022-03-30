import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button onClick={props.add} className={`${classes.btn} ${classes.primary}`}>
      {props.children}
    </button>
  );
};

export default Button;
