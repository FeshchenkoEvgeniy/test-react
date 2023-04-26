import { useState } from "react";
import { CardList } from "../../components/CardList/CardList";
import userData from "../../data/userData.json";
import {
  DivWrapper,
  BackLink,
  DivSelect,
  Label,
  Select,
  SelectText,
} from "./Tweets.styled";
import { RiArrowGoBackLine } from "react-icons/ri";

export const Tweets = () => {
  const users = userData;
  const [value, setValue] = useState("all");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <DivWrapper>
      <BackLink to="Home">
        Back <RiArrowGoBackLine />
      </BackLink>
      <DivSelect>
        <Label>
          Filter
          <Select value={value} onChange={handleChange}>
            <option value="all">all</option>
            <option value="follow">follow</option>
            <option value="followings">followings</option>
          </Select>
        </Label>
        <SelectText>Showing {value} </SelectText>
      </DivSelect>
      <CardList data={users} filter={value} />
    </DivWrapper>
  );
};
