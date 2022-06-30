import { SortingTabsMobile, SortingTabsSM } from "./components";

export enum SortingTabsValues {
  ID = "ID",
  MOST_COMMENTS = "Most Comments",
}

interface IProps {
  onSortPosts: (sortCriteria: SortingTabsValues) => void;
}

export const SortingTabs = ({ onSortPosts }: IProps) => (
  <div className="px-4 sm:px-0">
    <SortingTabsMobile onSortPosts={onSortPosts} />
    <SortingTabsSM onSortPosts={onSortPosts} />
  </div>
);
