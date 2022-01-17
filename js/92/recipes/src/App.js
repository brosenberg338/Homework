import './App.css';
import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';
import ListComponent from './ListComponent';
import ClickCounter from './ClickCounter';

class App extends Component {
  state = {
    recipes: [
      {
        id: 1,
        name: 'Pizza',
        ingredients: ['dough', 'tomato', 'cheese'],
        directions: ['mix', 'bake', 'eat'],
        picture: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132616/new-york-style-round-pizza-2-pack.b194a54a16e50c7e32ff67da4ca4d8b1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1&w=210'
      },
      {
        id: 2,
        name: 'Burger',
        ingredients: ['buns', 'meat', 'tomato'],
        directions: ['slice', 'grill', 'eat'],
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKKB9oMfqOovzgqR0B7ws7aOiJtvhpHOqDw&usqp=CAU'
      }
    ],
    selectedRecipe: 0
  }

  //selectRecipe = (index) => {
  selectRecipe(index) {
    console.log('selectRecipe', index);

    this.setState({
      selectedRecipe: index
    });
  }

  render() {
    /*const recipeDetails = this.state.selectedRecipe !== undefined || null ?
      <RecipeDetails recipe={this.state.recipes[this.state.selectedRecipe]} /> :
      null;*/

    return (
      <div className="container-fluid">
        <div className="text-center">
          <h1>PCS Recipes</h1>
          <hr />
          <h4>recipes</h4>
          <ul className="bulletless">
            {this.state.recipes.map((item, index) => (
              <li key={item.id} onClick={/*this.selectRecipe.bind(this, index)*/() => this.selectRecipe(index)}>{item.name}</li>
            ))}
          </ul>
          <hr />
          {/*recipeDetails*/}
          <RecipeDetails recipe={this.state.recipes[this.state.selectedRecipe]} />
          <hr />
          <ClickCounter />
        </div>
      </div>
    );
  }
}

export default App;
