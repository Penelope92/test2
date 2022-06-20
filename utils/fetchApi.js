import axios from "axios";

export const baseUrl = 'https://realestatetest11.herokuapp.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url);
  
  console.log(data);
  
  return data;
}
