import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import {
  DivCardItem,
  DivAvatar,
  ImgAvatar,
  TweetsText,
  FollowersText,
  BtnFollowing,
  BtnFollow,
  DivLogo,
} from "./CardListItem.styled";
import logo from "../../assets/Logo.png";
import picture from "../../assets/picture2 1.png";
export const CardListItem = ({ user }) => {
  const { id, tweets, followers, avatar } = user;
  const [isFollowing, setIsFollowing] = useState(
    JSON.parse(localStorage.getItem(`${id}-isFollowing`)) ?? false
  );

  const [followersNumber, setFollowersNumber] = useState(
    JSON.parse(localStorage.getItem(`${id}-followersNumber`)) ?? followers
  );

  useEffect(() => {
    localStorage.setItem(`${id}-isFollowing`, JSON.stringify(isFollowing));
    localStorage.setItem(
      `${id}-followersNumber`,
      JSON.stringify(followersNumber)
    );
  }, [id, isFollowing, followersNumber]);

  const handleClickFollow = () => {
    setIsFollowing(true);
    setFollowersNumber(followersNumber + 1);
  };

  const handleClickFollowing = () => {
    setIsFollowing(false);
    setFollowersNumber(followersNumber - 1);
  };

  return (
    <div>
      <DivCardItem>
        <DivLogo>
          <img src={logo} alt="logo" />
        </DivLogo>
        <div>
          <img src={picture} alt="picture" style={{ marginTop: "20px" }} />
        </div>
        <DivAvatar>
          <ImgAvatar src={avatar} alt="avatar" />
        </DivAvatar>
        <TweetsText>{tweets} TWEETS</TweetsText>
        <FollowersText>
          {new Intl.NumberFormat("en-US").format(followersNumber)} FOLLOWERS
        </FollowersText>
        {isFollowing ? (
          <BtnFollowing type="button" onClick={handleClickFollowing}>
            FOLLOWING
          </BtnFollowing>
        ) : (
          <BtnFollow type="button" onClick={handleClickFollow}>
            FOLLOW
          </BtnFollow>
        )}
      </DivCardItem>
    </div>
  );
};

CardListItem.propTypes = {
  user: PropTypes.object.isRequired,
};
