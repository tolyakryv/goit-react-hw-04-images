import propTypes from 'prop-types';
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
