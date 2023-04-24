import PropTypes from 'prop-types'

export const Button = ({ handleClick }) => {
    return (
        <button type="button" onClick={handleClick}>Load More</button>
    )
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};