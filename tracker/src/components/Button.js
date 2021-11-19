import PropTypes from "prop-types";
const Button = ({ color, text, onClick }) => {
  return (
    <button className="btn" style={{ color: color }} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultPropTypes = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
