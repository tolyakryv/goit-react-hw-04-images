import Searchbar from './Searchbar/Searchbar';
import React, { Component } from 'react';
import imgAPI from './ImgAPI/imgAPI';
import './styles.css';
class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchText: '',
    error: null,
    total: '',
  };
  // componentDidUpdate() {
  //   this.fetchImg();
  // }
  onSubmitSearch = query => {
    this.setState({
      images: [],
      currentPage: 1,
      searchText: query,
      error: null,
      total: '',
    });
    this.fetchImg();
  };
  fetchImg = () => {
    const { searchText, currentPage } = this.state;
    imgAPI(searchText, currentPage).then(({ hits, totalHits }) => {
      const getImg = hits.map(({ id, webformatURL, largeImageURL }) => {
        return { id, webformatURL, largeImageURL };
      });
      this.setState(prevState => ({
        images: [...prevState.images, ...getImg],
        total: totalHits,
      }));
    });
  };
  render() {
    return <Searchbar onSubmit={this.onSubmitSearch} />;
  }
}
export default App;
