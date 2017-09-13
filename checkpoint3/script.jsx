'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');



class Fetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artistData: {},
      searchArtist: '',
      searchInput: ''
    };

    this.currentSearchQuery;
    this.getSearchInput = this.getSearchInput.bind(this);
    this.setSearchOutput = this.setSearchOutput.bind(this);
  }


  getSearchInput(event) {
    const uriString = encodeURI(event.target.value);
    this.currentSearchQuery = uriString;
  }

  setSearchOutput(event) {
    event.preventDefault();

    fetch(`https://itunes.apple.com/search?term=${this.currentSearchQuery}&limit=50`).then((response) => {
        response.json().then((data) => {
          this.setState({
            artistData: data.results
          });
        });
      });
  }

  render() {

    let lis = [];

    if(this.state.artistData.length >= 1) {
      this.state.artistData.forEach((artist) =>{
        lis.push(
          <a href={artist.trackViewUrl} className='anc'>
            <li key={artist.trackId}>{artist.trackName}  By: {artist.artistName}</li>
          </a>
        );
      });
    }

    return (
      <div className="react-wrapper">
        <header>
          <h1>Search iTunes for your favorite artist</h1>
          <form>
            <input type="text"  onChange={this.getSearchInput} />
            <button onClick={this.setSearchOutput}>Search</button>
          </form>
        </header>
        <ul>{lis}</ul>
      </div>
    );
  }

}

ReactDOM.render(<Fetch />, document.getElementById('fetch'));
