import React, { Component } from 'react';
import propTypes from 'prop-types';
import s from './Searchbar.module.css';
class Searchbar extends Component {
  state = {
    searchImg: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchImg);
  };
  changeInput = e => {
    this.setState({ searchImg: e.currentTarget.value.trim() });
  };
  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.searchFormButton}>
            <span className={s.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.searchFormInput}
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
Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
