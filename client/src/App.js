import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import BookList from "./components/booklist";
import AddBook from "./components/addBook";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <h3>BookList</h3>
        <div>
          <BookList />
        </div>
        <div>
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
