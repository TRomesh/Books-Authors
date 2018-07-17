import React, { Component } from "react";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./bookDetails";
import { graphql } from "react-apollo";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  getBooks() {
    return this.props.data.loading ? (
      <div>loading...</div>
    ) : (
      this.props.data.books.map(book => {
        return (
          <li
            key={book.id}
            onClick={e => {
              this.setState({ selected: book.id });
            }}
          >
            {book.name}
          </li>
        );
      })
    );
  }
  render() {
    return (
      <div>
        <ul>{this.getBooks()}</ul>
        <BookDetails bookid={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
