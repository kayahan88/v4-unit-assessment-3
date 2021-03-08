
import './App.css';
import React, { Component } from 'react'
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import data from './data'
import SearchBar from './Components/SearchBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      books: data,
      shelf: []
    }
    this.addToShelf = this.addToShelf.bind(this)
  }

  addToShelf(title){
    this.state.shelf.push(title)
  }

  render(){
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <section className="container-1">
          <BookList books={this.state.books} addToShelf={this.addToShelf}/>
          <div className='line' ></div>
          <Shelf shelf={this.state.shelf} className='shelf-container'/>
        </section>
        
      </div>
    );

  }

}

export default App;
