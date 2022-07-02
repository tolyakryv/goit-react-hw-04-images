import axios from 'axios';
const KEY = '26622976-b5b30f097ffc08e63415dc10e';

const imgAPI = (searchText = '', page = 1) => {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        q: searchText,
        page: page,
        key: KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
      },
    })
    .then(response => response.data);
};
export default imgAPI;
