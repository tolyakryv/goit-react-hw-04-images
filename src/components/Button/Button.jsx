import propTypes from 'prop-types';
import './Button.css';
const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className="Button">
      Load More
    </button>
  );
};
export default Button;
Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
