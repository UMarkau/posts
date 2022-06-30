/* eslint-disable jsx-a11y/anchor-is-valid */
import { Post } from "./components";
import { apiTypes } from "../../API";

interface IProps {
  posts: apiTypes.IPostWithComment[];
  onDeletePost: (postId: number) => void;
}

export const Posts = ({ posts, onDeletePost }: IProps) => {
  return (
    <div className="mt-4">
      <h1 className="sr-only">Recent questions</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <Post post={post} key={post.id} onDeletePost={onDeletePost} />
        ))}
      </ul>
    </div>
  );
};
