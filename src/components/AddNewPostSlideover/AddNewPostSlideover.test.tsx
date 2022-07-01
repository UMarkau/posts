import { render, screen, fireEvent } from "@testing-library/react";
import {
  AddNewPostSlideover,
  IAddNewPostSlideoverProps,
  ADD_NEW_POST_SLIDEOVER_TEST_ID,
} from "./AddNewPostSlideover";

describe("AddNewPostSlideover", () => {
  const defaultProps: IAddNewPostSlideoverProps = {
    isSlideoverOpen: true,
    onCloseSlideoverClick: jest.fn(),
    onSubmitNewPost: jest.fn(),
  };

  const renderAddNewPostSlideover = (
    props?: Partial<IAddNewPostSlideoverProps>
  ) => {
    render(<AddNewPostSlideover {...{ ...defaultProps, ...props }} />);
  };

  it("renders correctly", () => {
    renderAddNewPostSlideover();

    const slideover = screen.getByTestId(ADD_NEW_POST_SLIDEOVER_TEST_ID);
    expect(slideover).toBeInTheDocument();
  });

  it("triggers onSubmitNewPost handler on 'Publish' button click", () => {
    const handleSubmitNewPost = jest.fn();
    const TEST_TITLE = "test_title";
    const TEST_BODY = "test_body";
    const TEST_POSTED_BY = 1;
    renderAddNewPostSlideover({ onSubmitNewPost: handleSubmitNewPost });

    const titleInput = screen.getByLabelText("Title");
    fireEvent.change(titleInput, { target: { value: TEST_TITLE } });

    const bodyInput = screen.getByLabelText("Body");
    fireEvent.change(bodyInput, { target: { value: TEST_BODY } });

    const postedBySelect = screen.getByLabelText("Posted by");
    fireEvent.change(postedBySelect, { target: { value: TEST_POSTED_BY } });

    const submitBtn = screen.getByRole("button", { name: "Publish" });
    fireEvent.click(submitBtn);

    expect(handleSubmitNewPost).toHaveBeenCalledWith({
      title: TEST_TITLE,
      body: TEST_BODY,
      userId: TEST_POSTED_BY,
    });
  });
});
