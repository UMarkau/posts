import axios from "axios";
import { IPost, IComment, TAddPostPayload } from "./types";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getPosts = () => client.get<IPost[]>("posts");
export const getComments = () => client.get<IComment[]>("comments");

// No types here because we don't care about response type.
export const deletePost = (postId: number) => client.delete(`posts/${postId}`);
export const addPost = (postData: TAddPostPayload) =>
  client.post("posts", postData);
