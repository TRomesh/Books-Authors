import React, { Component } from "react";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery
} from "../queries/queries";
import { compose, graphql } from "react-apollo";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      authorId: ""
    };
  }
  displayAuthors = () => {
    let data = this.props.getAuthorsQuery;
    return data.loading ? (
      <option>loading...</option>
    ) : (
      data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      })
    );
  };

  submitForm = e => {
    e.preventDefault();
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label>Book Name :</label>
          <input
            type="text"
            onChange={e => {
              this.setState({ name: e.target.value });
            }}
          />
        </div>
        <div>
          <label>Genre :</label>
          <input
            type="text"
            onChange={e => {
              this.setState({ genre: e.target.value });
            }}
          />
        </div>
        <div>
          <label>Author :</label>
          <select
            onChange={e => {
              this.setState({ authorId: e.target.value });
            }}
          >
            {this.displayAuthors()}
          </select>
        </div>
        <div>
          <button>Add Book</button>
        </div>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
