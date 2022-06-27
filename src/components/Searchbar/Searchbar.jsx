import React, { Component } from 'react';
// import fetchImg from 'components/ImgAPI/imgAPI';

class Searchbar extends Component {
  state = {
    searchImg: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const query = this.state.searchImg;
    // fetchImg(this.state.searchImg, 1);
    this.props.onSubmit(query);
  };
  changeInput = e => {
    this.setState({ searchImg: e.currentTarget.value.trim() });
  };
  render() {
    return (
      <header className=" Searchbar">
        <form className=" SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className=" SearchForm-button">
            <span className=" SearchForm-button-label">Search</span>
          </button>

          <input
            className=" SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.changeInput}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
