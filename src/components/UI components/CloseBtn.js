import classes from './CloseBtn.module.css';

const CloseBtn = (props) => {
  return (
    <div className={classes.closeBtnContainer}>
      <button className={classes.closeBtn} onClick={props.close}>
        x
      </button>
    </div>
  );
};

export default CloseBtn;
