import { Button } from "./btn load more/BtnLoadMore";
import { getTweets } from "../api/api";
import { useEffect, useState } from "react";
import { Loader } from "./Loader/Loader";
import { CardList } from "./CardList/CardList";

export const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!page) return;
    setLoading(true);

    getTweets(page)
      .then((response) =>
        response.data.forEach(({ id, user, tweets, followers, avatar }) => {
          !data.some((data) => data.id === id) &&
            setData((data) => [
              ...data,
              { id, user, tweets, followers, avatar },
            ]);
        })
      )
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleClick = () => {
    setPage((page) => page + 1);
  };

  return (
    <div>
      {error && <h2>{error.message}</h2>}
      {loading && <Loader />}
      <CardList data={data} />
      {data.length < 12 && <Button handleClick={handleClick} />}
    </div>
  );
};
