import PropTypes from "prop-types";
import { useState } from "react";
export const CardListItem = ({ user, tweets, followers, avatar }) => {
  const [following, setFollowing] = useState(followers);
  const [boolean, setBoolean] = useState(false);
  const [text, setText] = useState("Follow");
  const handleClick = () => {
    if (!boolean) {
      setBoolean(true);
      setText("Following");
      setFollowing((following) => following + 1);
    } else {
      setBoolean(false);
      setFollowing((following) => following - 1);
      setText("Follow");
    }
  };

  return (
    <li>
      <img src={avatar} alt="avatar" />
      <p>{user}</p>
      <p>{tweets}</p>
      <p>{following}</p>
      <button type="text" onClick={handleClick}>
        {text}
      </button>
    </li>
  );
};

CardListItem.propTypes = {
  user: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
};
