import { render, screen, fireEvent } from "@testing-library/react";
import {
  SortingTabs,
  SortingTabsValues,
  ISortingTabsProps,
  SORTING_TABS_TEST_ID,
} from "./SortingTabs";

describe("SortingTabs", () => {
  const defaultProps: ISortingTabsProps = {
    onSortPosts: jest.fn(),
  };

  const renderSortingTabs = (props?: Partial<ISortingTabsProps>) => {
    render(<SortingTabs {...{ ...defaultProps, ...props }} />);
  };

  it("renders correctly", () => {
    renderSortingTabs();
    const sortingTabs = screen.getByTestId(SORTING_TABS_TEST_ID);
    expect(sortingTabs).toBeInTheDocument();
  });

  it("triggers onSortPosts handler on tab click", () => {
    const handleSort = jest.fn();
    renderSortingTabs({ onSortPosts: handleSort });

    const mostCommentsTab = screen.getByRole("tab", { name: "Most Comments" });
    const idTab = screen.getByRole("tab", { name: "ID" });

    fireEvent.click(mostCommentsTab);
    expect(handleSort).toHaveBeenCalledWith(SortingTabsValues.MOST_COMMENTS);

    fireEvent.click(idTab);
    expect(handleSort).toHaveBeenCalledWith(SortingTabsValues.ID);
  });
});
