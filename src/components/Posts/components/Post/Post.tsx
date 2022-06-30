/* eslint-disable jsx-a11y/anchor-is-valid */
import { Popover, Transition } from "@headlessui/react";
import { toast } from "react-toastify";
import { apiTypes } from "../../../../API";
import { PostComment } from "./components";

interface IProps {
  post: apiTypes.IPostWithComment;
  onDeletePost: (postId: number) => void;
}

export const Post = ({ post, onDeletePost }: IProps) => {
  const handleCopyId = () => {
    try {
      navigator.clipboard.writeText(`${post.id}`);
      toast.success(`Post ID ${post.id} was copied`);
    } catch {
      toast.error("Something went wrong");
    }
  };

  const handleDeletePost = () => {
    onDeletePost(post.id);
  };

  return (
    <li className="bg-white shadow sm:rounded-lg">
      <article aria-labelledby="question-title-81614">
        <div className="divide-y divide-gray-200">
          <div className="px-4 py-6 sm:p-6">
            <div className="flex space-x-3 items-center">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  <a href="#" className="hover:underline">
                    Dries Vincent
                  </a>
                </p>
                <p className="text-sm text-gray-500">
                  <a href="#" className="hover:underline">
                    @driesvincent
                  </a>
                </p>
              </div>
              <div className="flex-shrink-0 self-center flex">
                <div className="relative inline-block text-left">
                  <Popover className="relative">
                    <Popover.Button>
                      <span className="sr-only">Open options</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </Popover.Button>
                    <Transition
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Popover.Panel className="absolute z-10">
                        <div
                          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu-0-button"
                          tabIndex={-1}
                        >
                          <div className="py-1" role="none">
                            <button
                              className="flex px-4 py-2 text-sm w-full text-gray-700 active:bg-gray-100"
                              role="menuitem"
                              tabIndex={-1}
                              id="options-menu-0-item-0"
                              onClick={handleCopyId}
                            >
                              <svg
                                className="mr-3 h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                                <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                              </svg>
                              <span>Copy ID to clipboard</span>
                            </button>
                            <button
                              className="text-gray-700 flex px-4 py-2 text-sm w-full active:bg-gray-100"
                              role="menuitem"
                              tabIndex={-1}
                              id="options-menu-0-item-0"
                              onClick={handleDeletePost}
                            >
                              <svg
                                className="mr-3 h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>Delete</span>
                            </button>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                </div>
              </div>
            </div>
            <h2
              id="question-title-81614"
              className="mt-4 text-base font-medium text-gray-900"
            >
              {post.title}
            </h2>
            <div className="mt-2 text-sm text-gray-700 space-y-4">
              <p>{post.body}</p>
            </div>
          </div>
          <div>
            <div className="px-4 py-6 sm:p-6">
              <ul className="space-y-8">
                {post.comments.map((comment) => (
                  <PostComment comment={comment} key={comment.id} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
};
