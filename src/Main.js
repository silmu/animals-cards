import React, { Component } from 'react';
import classes from './Main.module.css';

import AnimalCard from './components/AnimalCard';
import { animals } from './components/animals';

class Main extends Component {
  state = { animals: animals };

  addLikeHandler = (animalName) => {
    let arr = this.state.animals.map((animal) => {
      if (animal.name === animalName) {
        animal.likes++;
      }
      return animal;
    });
    //Updare array state with new like added
    this.setState({ animals: arr });
  };

  render() {
    const animalsList = this.state.animals.map((animal) => {
      return (
        <AnimalCard
          key={animal.name}
          name={animal.name}
          likes={animal.likes}
          src={`https://source.unsplash.com/1600x900/?${animal.name}`}
          //add passes function to AnimalCard, AnimalCard then passes it to Button
          add={() => this.addLikeHandler(animal.name)}
        />
      );
    });

    return (
      <main>
        <div className={classes.cards}>{animalsList}</div>
      </main>
    );
  }
}

export default Main;
