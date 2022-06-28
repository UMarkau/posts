import axios from "axios";
import { Post, Comment } from "./models";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getPosts = () => client.get<Post[]>("posts");
export const getComments = () => client.get<Comment[]>("comments");
