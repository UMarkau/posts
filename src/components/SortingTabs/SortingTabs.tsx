import { SortingTabsMobile, SortingTabsSM } from "./components";

export enum SortingTabsValues {
  ID = "ID",
  MOST_COMMENTS = "Most Comments",
}

interface IProps {
  onChange: (val: SortingTabsValues) => void;
}

export const SortingTabs = ({ onChange }: IProps) => (
  <div className="px-4 sm:px-0">
    <SortingTabsMobile onChange={onChange} />
    <SortingTabsSM onChange={onChange} />
  </div>
);
