import propTypes from 'prop-types';
import s from './Button.module.css';
const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={s.button}>
      Load More
    </button>
  );
};
export default Button;
Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
