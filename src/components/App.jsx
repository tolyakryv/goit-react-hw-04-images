import Searchbar from './Searchbar/Searchbar';
import React, { useState, useEffect } from 'react';
import imgAPI from '../services/imgAPI';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import s from './App.module.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [getPage, setGetPage] = useState(false);
  useEffect(() => {
    const fetchImg = () => {
      setShowLoader(true);

      imgAPI(searchText, currentPage)
        .then(({ hits, totalHits }) => {
          const getImg = hits.map(({ id, webformatURL, largeImageURL }) => {
            return { id, webformatURL, largeImageURL };
          });
          setImages([...images, ...getImg]);
          setTotal(totalHits);
          setCurrentPage(currentPage + 1);
          setShowLoader(false);
        })
        .catch(error => setError(error));
      setGetPage(false);
    };

    if (searchText !== '') {
      if (getPage) {
        fetchImg();
      }
    }
  }, [searchText, currentPage, images, getPage]);

  const onSubmitSearch = query => {
    setImages([]);
    setSearchText(query);
    setGetPage(true);
  };

  const onClickLoad = () => {
    setGetPage(true);
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const openModal = id => {
    const findImg = images.find(e => e.id === id);
    setLargeImageURL(findImg.largeImageURL);
    toggleModal();
  };
  return (
    <div className={s.App}>
      <Searchbar onSubmit={onSubmitSearch} />
      {error && alert(error)}
      {images.length > 0 && (
        <ImageGallery openModal={openModal} images={images} />
      )}
      {showLoader && <Loader />}
      {images.length > 0 && total !== images.length && (
        <Button onClick={onClickLoad} />
      )}

      {showModal && <Modal onClose={toggleModal} showImg={largeImageURL} />}
    </div>
  );
};
export default App;
// class App extends Component {
//   state = {
//     images: [],
//     currentPage: 1,
//     searchText: '',
//     error: null,
//     total: null,
//     showModal: false,
//     largeImageURL: '',
//     showLoader: false,
//   };
//   componentDidUpdate(prevProps, prevState) {
//     if (
//       prevState.searchText !== this.state.searchText ||
//       prevState.currentPage !== this.state.currentPage
//     ) {
//       this.fetchImg();
//       console.log(this.state);
//     }
//   }
//   onSubmitSearch = query => {
//     this.setState({
//       images: [],
//       currentPage: 1,
//       searchText: query,
//       error: null,
//       total: null,
//       showModal: false,
//       largeImageURL: '',
//       showLoader: false,
//     });
//   };
//   fetchImg = () => {
//     this.setState({ showLoader: true });
//     const { searchText, currentPage } = this.state;
//     imgAPI(searchText, currentPage)
//       .then(({ hits, totalHits }) => {
//         const getImg = hits.map(({ id, webformatURL, largeImageURL }) => {
//           return { id, webformatURL, largeImageURL };
//         });
//         this.setState(prevState => ({
//           images: [...prevState.images, ...getImg],
//           total: totalHits,
//         }));
//       })
//       .catch(error => this.setState({ error }))
//       .finally(() => this.setState({ showLoader: false }));
//   };
//   onClickLoad = () => {
//     this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
//   };
//   toggleModal = () => {
//     this.setState(({ showModal }) => ({ showModal: !showModal }));
//   };
//   openModal = id => {
//     const findImg = this.state.images.find(e => e.id === id);
//     this.setState({ largeImageURL: findImg.largeImageURL });
//     this.toggleModal();
//   };
//   render() {
//     const { error, images, showLoader, showModal, largeImageURL, total } =
//       this.state;
//     return (
//       <div className={s.App}>
//         <Searchbar onSubmit={this.onSubmitSearch} />
//         {error && alert(error)}
//         {images.length > 0 && (
//           <ImageGallery openModal={this.openModal} images={images} />
//         )}
//         {showLoader && <Loader />}
//         {images.length > 0 && total !== images.length && (
//           <Button onClick={this.onClickLoad} />
//         )}

//         {showModal && (
//           <Modal onClose={this.toggleModal} showImg={largeImageURL} />
//         )}
//       </div>
//     );
//   }
// }
