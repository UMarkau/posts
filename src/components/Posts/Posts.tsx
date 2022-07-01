/* eslint-disable jsx-a11y/anchor-is-valid */
import { Post } from "./components";
import { apiTypes } from "../../API";

export interface IPostsProps {
  posts: apiTypes.IPostWithComment[];
  onDeletePost: (postId: number) => void;
}

export const POSTS_TEST_ID = "posts";

export const Posts = ({ posts, onDeletePost }: IPostsProps) => {
  return (
    <div className="mt-4" data-testid={POSTS_TEST_ID}>
      <h1 className="sr-only">Recent questions</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <Post post={post} key={post.id} onDeletePost={onDeletePost} />
        ))}
      </ul>
    </div>
  );
};
