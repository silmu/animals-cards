import React, { Component } from 'react';
import classes from './Main.module.css';

import AnimalCard from './components/AnimalCard';
import { animals } from './components/animals';
import Search from './components/UI components/Search';

class Main extends Component {
  state = { animals: animals, searchValue: '', counter: 0 };

  addLikeHandler = (animalName) => {
    let arr = this.state.animals.map((animal) => {
      if (animal.name === animalName) {
        animal.likes++;
        return animal;
      }
      return animal;
    });
    //Updare array state with new like added
    this.setState({ animals: arr });
  };

  closeHandler = (animalName) => {
    let arr = this.state.animals.filter((animal) => {
      if (animal.name !== animalName) {
        return animal;
      }
      return '';
    });
    //Updare array state with selected animal removed
    this.setState({ animals: arr });
  };

  searchHandler = (e) => {
    this.setState({ searchValue: e.target.value.toLowerCase() });
  };

  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name.toLowerCase().includes(this.state.searchValue);
    });

    const animalsList = animalFilter.map((animal) => {
      return (
        <AnimalCard
          key={animal.name}
          name={animal.name}
          likes={animal.likes}
          src={`https://source.unsplash.com/1600x900/?${animal.name}`}
          //add passes function to AnimalCard, AnimalCard then passes it to Button
          add={() => this.addLikeHandler(animal.name)}
          close={() => this.closeHandler(animal.name)}
        />
      );
    });

    return (
      <main>
        <h1>{this.state.animals.length} Animal Cards</h1>
        <Search search={this.searchHandler} />
        <p>{this.state.searchValue}</p>
        <div className={classes.cards}>{animalsList}</div>
      </main>
    );
  }
}

export default Main;
