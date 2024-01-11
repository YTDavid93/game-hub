import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'ecb37f21ed184a02bb9a5750a0fe8d54'
  },
});