import React, { Component } from "react";
import { getBooksQuery } from "../queries/queries";
import { graphql } from "react-apollo";

class BookList extends Component {
  getBooks() {
    return this.props.data.loading ? (
      <div>loading...</div>
    ) : (
      this.props.data.books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      })
    );
  }
  render() {
    return <div>{this.getBooks()}</div>;
  }
}

export default graphql(getBooksQuery)(BookList);
