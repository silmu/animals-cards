import classes from './AnimalCard.module.css';
import Button from './UI components/Button';

const AnimalCard = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.src} alt={props.name}></img>
      <div className={classes.title}>{props.name}</div>
      <div className={classes.like}>{props.likes} ❤️</div>
      <Button add={props.add}>Add like</Button>
    </div>
  );
};

export default AnimalCard;
