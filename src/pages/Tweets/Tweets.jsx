import { CardList } from "../../components/CardList/CardList";
import userData from "../../data/userData.json";
import { DivWrapper, BackLink } from "./Tweets.styled";
import { RiArrowGoBackLine } from "react-icons/ri";

export const Tweets = () => {
  const users = userData;

  return (
    <DivWrapper>
      <BackLink to="Home">
        Back <RiArrowGoBackLine />
      </BackLink>
      <CardList data={users} />
    </DivWrapper>
  );
};
