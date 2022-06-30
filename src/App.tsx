import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Header, SortingTabs, Posts, UsersList } from "./components";
import { apiTypes, API } from "./API";
import { getPostsWithComments } from "./utils";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const [posts, setPosts] = useState<apiTypes.IPostWithComment[]>([]);
  const [loading, setLoading] = useState(false);

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

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* <!--
    When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars

    Menu open: "fixed inset-0 z-40 overflow-y-auto", Menu closed: ""
  --> */}
      <Header />
      <div className="py-10">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
          <main className="lg:col-span-8">
            <SortingTabs onChange={(val) => {}} />
            <Posts posts={posts} onDeletePost={handleDeletePost} />
          </main>
          <UsersList />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
