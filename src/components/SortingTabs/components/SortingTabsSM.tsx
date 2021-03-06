import { Tab } from "@headlessui/react";
import { classNames } from "../../utils";
import { SortingTabsValues } from "../SortingTabs";

interface ITabComponentProps {
  option: SortingTabsValues;
  className: string;
}

const TabComponent = ({ option, className }: ITabComponentProps) => (
  <Tab
    className={({ selected }) =>
      classNames(
        selected
          ? // Unfortunately, for some reason, the border for 'selected' is overwritten by tailwindCss for the second tab. I decided to not spend too much time on debugging here.
            "text-gray-900 border-blue-500"
          : "text-gray-500 hover:text-gray-700 border-transparent",
        `border-b-2 outline-none group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10 ${className}`
      )
    }
  >
    {option}
  </Tab>
);

interface ISortingTabsSMProps {
  onSortPosts: (sortCriteria: SortingTabsValues) => void;
}

export const SortingTabsSM = ({ onSortPosts }: ISortingTabsSMProps) => {
  const handleChange = (index: number) => {
    const options = Object.values(SortingTabsValues);
    onSortPosts(options[index]);
  };

  return (
    <div className="hidden sm:block">
      <Tab.Group onChange={handleChange}>
        <Tab.List
          aria-label="Tabs"
          className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
        >
          {Object.values(SortingTabsValues).map((val, index) => (
            <TabComponent
              option={val}
              key={val}
              className={!!index ? "rounded-r-lg" : "rounded-l-lg"}
            />
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
};
