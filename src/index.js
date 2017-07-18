import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyA8Qd9PyAiw5i0mYxCFbaB45ro2uYcb_64';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    }

    // automatically begins search for surfboards
    // when App is first rendered
    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ videos });
      // equivalent to this.setState({ videos: videos })
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

export default App;