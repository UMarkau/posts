/* eslint-disable jsx-a11y/anchor-is-valid */
import { Post } from "./components";

export const Posts = () => {
  return (
    <div className="mt-4">
      <h1 className="sr-only">Recent questions</h1>
      <ul className="space-y-4">
        <Post />
        {/* <!-- More posts... --> */}
      </ul>
    </div>
  );
};
