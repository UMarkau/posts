import { useState, useEffect, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  Header,
  SortingTabs,
  Posts,
  SortingTabsValues,
  AddNewPostSlideover,
} from "./components";
import { apiTypes, API } from "./API";
import { getPostsWithComments } from "./utils";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const [posts, setPosts] = useState<apiTypes.IPostWithComment[]>([]);
  const [loading, setLoading] = useState(false);
  const [isSlideoverOpen, setIsSlideoverOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPostsWithComments()
      .then((postsWithComments) => {
        setPosts(postsWithComments);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDeletePost = async (postId: number) => {
    try {
      await API.deletePost(postId);
      const updatedPosts = [...posts].filter((post) => post.id !== postId);
      setPosts(updatedPosts);
      toast.success(`The post with ID ${postId} was successfully deleted`);
    } catch {
      toast.error("Something went wrong");
    }
  };

  const handleSortPosts = useCallback(
    (sortCriteria: SortingTabsValues) => {
      if (sortCriteria === SortingTabsValues.ID) {
        const updatedPosts = [...posts].sort(
          (postA, postB) => postB.id - postA.id
        );
        setPosts(updatedPosts);
      }
      if (sortCriteria === SortingTabsValues.MOST_COMMENTS) {
        const updatedPosts = [...posts].sort(
          (postA, postB) => postB.comments.length - postA.comments.length
        );
        setPosts(updatedPosts);
      }
    },
    [posts]
  );

  const handleAddNewPostClick = () => {
    setIsSlideoverOpen(true);
  };

  const handleCloseSlideoverClick = () => {
    setIsSlideoverOpen(false);
  };

  const handleSubmitNewPost = async (postData: apiTypes.TAddPostPayload) => {
    try {
      await API.addPost(postData);
      const updatedPosts = [
        ...posts,
        { ...postData, id: Math.random(), comments: [] },
      ];
      setPosts(updatedPosts);
      toast.success("The post has been added successfully");
    } catch {
      toast.error("Something went wrong");
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header onAddNewPostClick={handleAddNewPostClick} />
      <AddNewPostSlideover
        isSlideoverOpen={isSlideoverOpen}
        onCloseSlideoverClick={handleCloseSlideoverClick}
        onSubmitNewPost={handleSubmitNewPost}
      />
      <div className="py-10">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
          <main className="lg:col-span-full">
            <SortingTabs onSortPosts={handleSortPosts} />
            <Posts posts={posts} onDeletePost={handleDeletePost} />
          </main>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
