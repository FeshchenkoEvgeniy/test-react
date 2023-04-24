import axios from "axios";

export const getTweets = async (page) => {
  try {
    const resp = await axios.get(`https://6444f7c1b80f57f581ae567e.mockapi.io/tweets/?page=${page}&limit=3`);
    return resp;
  } catch (error) {
    console.log(error)
  }
};