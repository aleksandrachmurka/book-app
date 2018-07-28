import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import {Route, Link} from 'react-router-dom';
import ListOfBooks from './ListOfBooks'
import SearchBook from './SearchBook'
import './App.css'

class BooksApp extends React.Component {
	constructor(props) {
		super(props);
  		this.state = {
	  		books: []
  		}
	}

	getBooks() {
	  	BooksAPI.getAll().then(books => {
	  	this.setState({books})
	})}

  	componentDidMount() {
  		this.getBooks();
	}

	updateShelf = (book, shelf) => {
		BooksAPI.update(book, shelf).then(()=>this.getBooks());
		// book.shelf = shelf;
		// this.setState(state => ({
		// 	books: state.books.filter(b => b.id !== book.id).concat(book),
		// 	}))
		// BooksAPI.update(book, shelf).then(this.getBooks());
	}


  render() {
    return (
      <div className="app">
      	<Route exact path="/search" render={() => (
      		<SearchBook books={this.state.books} updateShelf={this.updateShelf}/>
        )} />
        <Route exact path="/" render={() => (
        	<ListOfBooks books={this.state.books} updateShelf={this.updateShelf}/>
        )} />
      </div>
    )
  }
}

export default BooksApp;
