import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

const URL = 'https://itunes.apple.com/search?term=major_lazer';

class SearchBox extends React.Component {
  render() {
    return (
      <div>
        <input type="text" ref="query" />
        <select ref="category">
          <option value="software">Apps</option>
          <option value="movie">Films</option>
        </select>
        <input type="submit" />
      </div>
    )
  }
  // findResults() {
  //   var query    = ReactDOM.findDOMNode(this.refs.query).value;
  //   var category = ReactDOM.findDOMNode(this.refs.category).value;
  //   var URL      = 'https://itunes.apple.com/search?term=' + query +'&country=us&entity=' + category;
  //   this.props.search(URL)
  // }
}

// class Results extends React.Component {
//   render() {
//     // const resultItems = this.state.map(result => {
//     //   return <ResultItem key={result.trackId} trackName={result.trackName} />
//     // });
//     return (
//       <ul>
//         <ResultItem />
//       </ul>
//     )
//   }
// }
function Results(props) {
  console.log(this.state.searchResults);
  return (
    <ul>
      <ResultItem />
    </ul>
  )
}
function ResultItem(props) {
  return <h1>Hello</h1>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      searchResults: []
    };
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          searchResults: result.results
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
      }
    );
  }

  
  render() {
    return (
      <div>
        <SearchBox />
        <Results />
      </div>
    )
  }
  // render() {

  //   console.log(this.state.items);
  //   // const resluts = this.state.items;
  //   // const listItems = resluts.map((resluts) =>
  //   //   <li key={resluts.id}>{resluts}</li>
  //   // );
  //   const listItems = (
  //     <ul>
  //       {this.state.items.map((item) =>
  //         <li key={item.id}>
  //           <img src={item.artworkUrl100} />
  //           {item.artistName} - {item.trackName}
  //         </li>
  //       )}
  //     </ul>
  //   );
  //   return (
  //     <ul>
  //       {listItems}
  //     </ul>
  //   );
  // }
  
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

