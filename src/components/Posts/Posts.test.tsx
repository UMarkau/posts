import { render, screen, fireEvent } from "@testing-library/react";
import { Posts, IPostsProps, POSTS_TEST_ID } from "./Posts";

describe("Posts", () => {
  const defaultPosts = [
    {
      body: "body",
      id: 1,
      title: "title",
      userId: 1,
      comments: [
        {
          body: "comment_body",
          email: "comment_email",
          id: 1,
          name: "comment_name",
          postId: 1,
        },
      ],
    },
  ];

  const defaultProps: IPostsProps = {
    onDeletePost: jest.fn(),
    posts: defaultPosts,
  };

  const renderPosts = (props?: Partial<IPostsProps>) => {
    render(<Posts {...{ ...defaultProps, ...props }} />);
  };

  it("renders correctly", () => {
    renderPosts();
    const posts = screen.getByTestId(POSTS_TEST_ID);
    expect(posts).toBeInTheDocument();
  });

  it("triggers onDeletePost handler on 'Delete' button click", () => {
    const handleDeletePost = jest.fn();
    renderPosts({ onDeletePost: handleDeletePost });

    const popoverBtn = screen.getByRole("button", { name: "Open options" });
    fireEvent.click(popoverBtn);

    const deleteBtn = screen.getByRole("menuitem", { name: "Delete" });
    fireEvent.click(deleteBtn);

    expect(handleDeletePost).toHaveBeenCalledWith(defaultPosts[0].id);
  });
});
