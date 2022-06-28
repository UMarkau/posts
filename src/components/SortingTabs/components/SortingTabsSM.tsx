import { Tab } from "@headlessui/react";
import { classNames } from "../../../utils";
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
          ? "text-gray-900 border-b-2 border-b-blue-500"
          : "text-gray-500 hover:text-gray-700",
        `group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10 ${className}`
      )
    }
  >
    {option}
  </Tab>
);

interface IProps {
  onChange: (val: SortingTabsValues) => void;
}

export const SortingTabsSM = ({ onChange }: IProps) => {
  const handleChange = (index: number) => {
    const options = Object.values(SortingTabsValues);
    onChange(options[index]);
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
