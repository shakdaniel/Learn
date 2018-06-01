import React from 'react';
import Artist from './Artist'

class ArtistsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      artists: this.props.artists
    }
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,24)})
  }

  addArtist(event) {
    event.preventDefault();
    let id = Math.floor((Math.random() * 100) + 1);
    let artistName = this.refs.artistName.value;
    let albumName = this.refs.albumName.value;
    this.setState({
      artists: this.state.artists.concat({id, artistName, albumName})
    })
    this.refs.artistName.value = '';
    this.refs.albumName.value = '';
  }

  render() {
    let filteredArtists = this.state.artists.filter(
      (artist) => {
        return artist.artistName.toLowerCase().indexOf(
          this.state.search.toLowerCase()
        ) !== -1; 
      }
    );
    return (
      <div>
        <input type="text"
          placeholder="Search"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)} 
        />
        <form onSubmit={this.addArtist.bind(this)}>
          <input type="text" ref="artistName" placeholder="Artist" />
          <input type="text" ref="albumName" placeholder="Album" />
          <button type="submit">Add New Artist</button>
        </form>
        <ul>
          {filteredArtists.map((artist) => {
            return <Artist artist={artist} key={artist.id} />
          })}
        </ul>
      </div>  
    )
  }
}

export default ArtistsList;