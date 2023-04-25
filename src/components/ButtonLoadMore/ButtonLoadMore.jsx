import PropTypes from "prop-types";
import { LoadMore } from "./ButtonLoadMore.styled";

export const BtnLoadMore = ({ handleClick }) => {
  return (
    <LoadMore type="button" onClick={handleClick}>
      Load More
    </LoadMore>
  );
};

BtnLoadMore.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
