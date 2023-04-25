import styled from "styled-components";

export const DivCardItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  &::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 214px;
    width: 380px;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
  &:not(:last-child) {
    margin-right: 48px;
  }
`;

export const DivLogo = styled.div`
  padding-left: 20px;
  padding-top: 20px;
  position: absolute;
  left: 0;
`;

export const DivAvatar = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 150px;
  top: 178px;
  background-color: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const ImgAvatar = styled.img`
  position: absolute;
  width: 62px;
  height: 62px;
  left: 9.48px;
  top: 9.42px;
  border-radius: 50%;
`;

export const TweetsText = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-top: 88px;
  margin-bottom: 16px;
`;

export const FollowersText = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-bottom: 26px;
`;

export const BtnFollowing = styled.button`
  font-family: "Montserrat";
  padding: 14px 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: 0;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  line-height: 21.94px;
  color: #373737;
  width: 196px;
  cursor: pointer;
`;

export const BtnFollow = styled.button`
  font-family: "Montserrat";
  padding: 14px 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: 0;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  line-height: 21.94px;
  color: #373737;
  width: 196px;
  cursor: pointer;
`;
