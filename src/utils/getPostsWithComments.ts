import { API, apiTypes } from "../API/";

export const getPostsWithComments = async (): Promise<
  apiTypes.IPostWithComment[]
> => {
  try {
    const postsResponse = await API.getPosts();
    const commentsResponse = await API.getComments();
    const postsData = postsResponse.data;
    const commentsData = commentsResponse.data;
    const posts = postsData.map((post) => ({
      ...post,
      comments: [] as apiTypes.IComment[],
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
