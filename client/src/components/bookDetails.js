import React, { Component } from "react";
import { getBookQuery } from "../queries/queries";
import { graphql } from "react-apollo";

class BookDetails extends Component {
  displayBookDetails() {
    let { book } = this.props.data;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All Books by this author</p>
          <ul>
            {book.author.books.map(book => {
              return <li key={book.id}>{book.name}</li>;
            })}
          </ul>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <p>Output book details here</p>
        {this.displayBookDetails()}
      </div>
    );
  }
}

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookid
      }
    };
  }
})(BookDetails);
