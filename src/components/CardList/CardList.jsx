import { CardListItem } from "../CardListItem/CardListItem";
import PropTypes from "prop-types";
export const CardList = ({ data }) => {
  return (
    <ul>
      {data.map(({ id, user, tweets, followers, avatar }) => (
        <CardListItem
          key={id}
          user={user}
          tweets={tweets}
          followers={followers}
          avatar={avatar}
        />
      ))}
    </ul>
  );
};

CardList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
