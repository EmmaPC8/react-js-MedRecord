// client.js

import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

const options = {
  ignoreHeaders: true,
};

const client = applyCaseMiddleware(
  axios.create({
    baseURL: "http://localhost:3000",
    //baseURL: "ec2-54-208-129-111.compute-1.amazonaws.com",
  }),
  options
);

export default client;