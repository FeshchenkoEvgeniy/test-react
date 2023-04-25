import { useState } from "react";
import { BtnLoadMore } from "../ButtonLoadMore/ButtonLoadMore";
import { CardListItem } from "../CardListItem/CardListItem";
import PropTypes from "prop-types";
import { Div, DivBtnLoadMore } from "./CardList.styled";
export const CardList = ({ data }) => {
  const initialPage = 3;
  const [page, setpage] = useState(initialPage);

  const handleClick = () => {
    setpage(page + initialPage);
  };
  return (
    <div>
      <Div>
        {data.slice(0, page).map((user) => (
          <CardListItem key={user.id} user={user} />
        ))}
      </Div>
      <DivBtnLoadMore>
        {page < data.length && <BtnLoadMore handleClick={handleClick} />}
      </DivBtnLoadMore>
    </div>
  );
};

CardList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      tweets: PropTypes.string.isRequired,
      followers: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
