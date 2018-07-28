import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchBook extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			showingBooks: []
		}
	}

	updateQuery = (query) => {
		this.setState({query: query})
		let booksToShow
		if (query) {
			BooksAPI.search(query).then(books => {
				if (books.error) {
					this.setState({ showingBooks: []})
				} else {
					booksToShow = books.map(book => {
					//big thanks to Edoh for clearing this on Udacity tech webinar
					const index = this.props.books.findIndex(c=> c.id===book.id)
					if (index >= 0) {
						return this.props.books[index]
					} else {
						return book
					}
				});}
			this.setState({showingBooks: booksToShow});
		})}
	}

	resetQuery = () => {
		this.setState( {query: ''})
	}

	render() {
		return(
			<div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input
                	type="text"
                	placeholder="Search by title or author"
                	value={this.state.query}
                	onChange={(event)=> this.updateQuery(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.showingBooks.map(book => (
                    <Book key={book.id} book={book}
                    updateShelf={this.props.updateShelf}/>
                ))}
              </ol>
            </div>
          </div>

		)
	}
}


export default SearchBook