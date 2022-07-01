import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { SortingTabsValues } from "../SortingTabs";

interface IProps {
  onSortPosts: (sortCriteria: SortingTabsValues) => void;
}

export const SortingTabsMobile = ({ onSortPosts }: IProps) => {
  const [value, setValue] = useState(SortingTabsValues.ID);

  const handleChange = (val: SortingTabsValues) => {
    setValue(val);
    onSortPosts(val);
  };

  return (
    <div className="sm:hidden">
      <label htmlFor="question-tabs" className="sr-only">
        Select a tab
      </label>
      <Listbox value={value} onChange={handleChange}>
        <Listbox.Button className="border-[1px] border-blue-500 w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          {value}
        </Listbox.Button>
        <Listbox.Options>
          {Object.values(SortingTabsValues).map((option) => (
            <Listbox.Option
              key={option}
              value={option}
              className="mt-4 border-[1px] h-10 border-blue-500 rounded flex justify-center items-center"
            >
              {option}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};
