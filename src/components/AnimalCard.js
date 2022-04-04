import classes from './AnimalCard.module.css';
import Button from './UI components/Button';
import CloseBtn from './UI components/CloseBtn';

const AnimalCard = (props) => {
  return (
    <div className={classes.card}>
      <CloseBtn close={props.close} />
      <img src={props.src} alt={props.name}></img>
      <div className={classes.title}>{props.name}</div>
      <div className={classes.like}>
        {props.likes}
        <span className={classes.heart}> ❤️</span>
      </div>
      <Button add={props.add}>Add like</Button>
    </div>
  );
};

export default AnimalCard;
