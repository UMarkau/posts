import { getPosts, getComments } from "./API";
import { Comment, Post } from "./models";

interface PostWithComment extends Post {
  comments: Comment[];
}

export type TPostsWithComment = PostWithComment[];

export const getPostsWithComments = async (): Promise<TPostsWithComment> => {
  try {
    const postsResponse = await getPosts();
    const commentsResponse = await getComments();
    const postsData = postsResponse.data;
    const commentsData = commentsResponse.data;
    const posts = postsData.map((post) => ({
      ...post,
      comments: [] as Comment[],
    }));
    for (const post of posts) {
      for (const comment of commentsData) {
        if (post.id === comment.postId) {
          post.comments.push(comment);
        }
      }
    }
    return posts;
  } catch {
    throw new Error();
  }
};
