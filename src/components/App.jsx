import axios from "axios";
import { useEffect, useState } from "react";

const getTweets = async (page) => {
  try {
    const resp = await axios.get(`https://6444f7c1b80f57f581ae567e.mockapi.io/tweets/?page=${page}&limit=3`);
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const App = () => {
const [data, setData] = useState([]);
const [page, setPage] = useState(1);

useEffect(() => {
  if (!page) {
    return;
  }
  try {
    getTweets(page).then(response => setData(response.data))
  } catch (error) {
  console.log(error)
  }
}, [page]);


const handleClick = () => {
  setPage(page => page + 1);
}
  return <div>
    {data.length > 0 && <button onClick={handleClick}>gf</button>}
    {/* <button onClick={handleClick}>gf</button> */}
  </div>;
};
