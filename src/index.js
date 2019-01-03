import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';
import './styles.css';

class App extends React.Component {
  // function App(props) {

  constructor() {
    super();

    this.state = {
      searchTerm: '',
      jokes: [],
      isFetchingJokes: false
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.searchJokes = this.searchJokes.bind(this);
  }

  // componentDidMount() {
  //   // console.log("componentDidMount");
  //   // this.searchJokes();
  // }

  searchJokes(limit = 20) {
    this.setState({ isFetchingJokes: true });

    // console.log('term', this.state.searchTerm);

    fetch(
      `https://icanhazdadjoke.com/search?term=${
        this.state.searchTerm
      }&limit=${limit}`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json'
        }
      }
    )
      .then(response => response.json())
      .then(json => {
        const jokes = json.results;
        this.setState({
          jokes,
          isFetchingJokes: false
        });
        console.log('jokes', jokes);
      });
  }

  onTellJoke() {
    this.searchJokes();
  }

  onSearchChange(value) {
    this.setState({ searchTerm: value });
  }

  renderJokes() {
    return (
      <ul>
        {this.state.jokes.map(item => (
          <li key={item.id}>{item.joke}</li>
        ))}
      </ul>
    );
  }

  render() {
    // console.log("----- RENDER -----");
    return (
      <div>
        <SearchForm
          onFormSubmit={this.searchJokes}
          onSearchValueChange={this.onSearchChange}
          isSearching={this.state.isFetchingJokes}
          onSingleSearchClick={() => this.searchJokes(1)}
        />

        <SearchForm
          onFormSubmit={() => this.searchJokes(2)}
          onSearchValueChange={this.onSearchChange}
          isSearching={this.state.isFetchingJokes}
          onSingleSearchClick={() => this.searchJokes(1)}
        />

        {this.state.isFetchingJokes
          ? 'searching for jokes...'
          : this.renderJokes()}

        <p>search term: {this.state.searchTerm}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App version="1.0" />, rootElement);
