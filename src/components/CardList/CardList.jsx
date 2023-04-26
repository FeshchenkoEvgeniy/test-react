import { useEffect, useState } from "react";
import { BtnLoadMore } from "../ButtonLoadMore/ButtonLoadMore";
import { CardListItem } from "../CardListItem/CardListItem";
import PropTypes from "prop-types";
import { Div, DivBtnLoadMore } from "./CardList.styled";
export const CardList = ({ data, filter }) => {
  const initialPage = 3;
  const [page, setpage] = useState(initialPage);
  const [filterUsers, setFilterUsers] = useState([]);
  console.log(filter)
  const handleClick = () => {
    setpage(page + initialPage);
  };

  useEffect(() => {
    const filteredUsers = data.filter((data) => {
      switch (filter) {
        case "follow":
          return !JSON.parse(localStorage.getItem(`${data.id}-isFollowing`));
        case "followings":
          return JSON.parse(localStorage.getItem(`${data.id}-isFollowing`));
        case "all":
          return true;
        default:
          return null;
      }
    });
    setFilterUsers(filteredUsers);
  }, [filter, data]);

  return (
    <div>
      <Div>
        {filterUsers.slice(0, page).map((user) => (
          <CardListItem key={user.id} user={user} />
        ))}
      </Div>
      <DivBtnLoadMore>
        {page < filterUsers.length && <BtnLoadMore handleClick={handleClick} />}
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
  filter: PropTypes.string.isRequired,
};
