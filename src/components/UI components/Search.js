import classes from './Search.module.css';

const Search = (props) => {
  return (
    <div className={classes.searchContainer}>
      <label for="search">Search: </label>
      <input
        type="text"
        name="search"
        className={classes.search}
        onChange={props.search}
      ></input>
    </div>
  );
};

export default Search;
