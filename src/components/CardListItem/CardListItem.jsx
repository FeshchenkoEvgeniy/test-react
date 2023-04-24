export const CardListItem = ({ data }) => {
  console.log(data);
  return (
    <li>
      <p>{data.user}</p>
      <p>{data.followers}</p>
      <p>{data.tweets}</p>
      <img src={data.avatar} alt="avatar" />
    </li>
  );
};
