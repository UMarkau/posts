import { SortingTabsMobile, SortingTabsSM } from "./components";

export enum SortingTabsValues {
  ID = "ID",
  MOST_COMMENTS = "Most Comments",
}

export interface ISortingTabsProps {
  onSortPosts: (sortCriteria: SortingTabsValues) => void;
}

export const SORTING_TABS_TEST_ID = "sorting-tabs";

export const SortingTabs = ({ onSortPosts }: ISortingTabsProps) => (
  <div className="px-4 sm:px-0" data-testid={SORTING_TABS_TEST_ID}>
    <SortingTabsMobile onSortPosts={onSortPosts} />
    <SortingTabsSM onSortPosts={onSortPosts} />
  </div>
);
