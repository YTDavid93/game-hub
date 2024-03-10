import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "059388d3150e41348188e1774e9a962a",
  },
});