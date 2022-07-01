import { useState } from "react";
import { toast } from "react-toastify";
import { apiTypes } from "../../API";
import { classNames } from "../utils";
import { Button } from "../ui";

export interface IAddNewPostSlideoverProps {
  isSlideoverOpen: boolean;
  onCloseSlideoverClick: () => void;
  onSubmitNewPost: (postData: apiTypes.TAddPostPayload) => void;
}

const postedByOptions = [
  { name: "Wade Cooper", userId: 1 },
  { name: "Arlene Mccoy", userId: 2 },
  { name: "Devon Webb", userId: 3 },
];

export const ADD_NEW_POST_SLIDEOVER_TEST_ID = "AddNewPostSlideover";

export const AddNewPostSlideover = ({
  isSlideoverOpen,
  onCloseSlideoverClick,
  onSubmitNewPost,
}: IAddNewPostSlideoverProps) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [postedBy, setPostedBy] = useState<number>(0);

  const handlePublishPost = () => {
    if (!title || !body || !postedBy) {
      toast.error("Please fill in all the fields");
    } else {
      onSubmitNewPost({
        title,
        body,
        userId: postedBy,
      });
      handleCloseSlideover();
    }
  };

  const handleCloseSlideover = () => {
    setTitle("");
    setBody("");
    setPostedBy(0);
    onCloseSlideoverClick();
  };

  return (
    <div
      className={classNames(
        isSlideoverOpen ? "w-full sm:w-1/3" : "w-0",
        "fixed min-h-screen z-40 overflow-y-auto right-0 inset-y-0 shadow-2xl bg-white flex flex-col"
      )}
      data-testid={ADD_NEW_POST_SLIDEOVER_TEST_ID}
    >
      <div className="p-5 relative text-white bg-blue-700">
        <h3 className="font-semibold">New Post</h3>
        <p className="text-xs opacity-70">
          Publish a new post by filling the information below.
        </p>
        <button
          className="absolute rounded-md p-2 top-2 right-2"
          onClick={handleCloseSlideover}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 opacity-60"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <form className="flex flex-col p-5">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border-solid border-gray-300 border-[1px] rounded"
        />
        <label htmlFor="body" className="mt-5">
          Body
        </label>
        <textarea
          id="body"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="border-solid border-gray-300 border-[1px] rounded"
        />
        <label htmlFor="posted" className="mt-5">
          Posted by
        </label>
        <select
          name="posted"
          id="posted"
          value={postedBy}
          className="border-solid border-gray-300 border-[1px] rounded"
          onChange={(e) => setPostedBy(parseInt(e.target.value))}
        >
          <option value={0} hidden>
            Select an Option
          </option>
          {postedByOptions.map((opt) => (
            <option key={opt.userId} value={opt.userId}>
              {opt.name}
            </option>
          ))}
        </select>
      </form>
      <div className="flex items-center justify-center sm:justify-end font-semibold text-xs px-5 mt-auto h-14 border-t-[1px] border-gray-300">
        <Button className="mr-2" onClick={handleCloseSlideover}>
          Cancel
        </Button>
        <Button primary onClick={handlePublishPost}>
          Publish
        </Button>
      </div>
    </div>
  );
};
