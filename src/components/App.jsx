import Searchbar from './Searchbar/Searchbar';
import React, { Component } from 'react';
import imgAPI from './ImgAPI/imgAPI';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import './styles.css';
class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchText: '',
    error: null,
    total: '',
    showModal: false,
    largeImageURL: '',
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchText !== this.state.searchText ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.fetchImg();
    }
  }
  onSubmitSearch = query => {
    this.setState({
      images: [],
      currentPage: 1,
      searchText: query,
      error: null,
      total: '',
      showModal: false,
      largeImageURL: '',
    });
    // this.fetchImg();
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
  onClickLoad = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  openModal = id => {
    const findImg = this.state.images.find(e => e.id === id);
    this.setState({ largeImageURL: findImg.largeImageURL });
    this.toggleModal();
  };
  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmitSearch} />
        {this.state.images.length > 0 && (
          <ImageGallery openModal={this.openModal} images={this.state.images} />
        )}
        <Loader />
        <Button onClick={this.onClickLoad} />
        {this.state.showModal && (
          <Modal
            onClose={this.toggleModal}
            showImg={this.state.largeImageURL}
          />
        )}
      </div>
    );
  }
}
export default App;
