import { CardListItem } from "../CardListItem/CardListItem";

export const CardList = ({ data }) => {
  console.log(data);
  return (
    <ul>
      {data.map((data) => (
        <CardListItem key={data.id} data={data} />
      ))}
    </ul>
  );
};
