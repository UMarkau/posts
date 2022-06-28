import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { SortingTabsValues } from "../SortingTabs";

interface IProps {
  onChange: (val: SortingTabsValues) => void;
}

export const SortingTabsMobile = ({ onChange }: IProps) => {
  const [value, setValue] = useState(SortingTabsValues.ID);

  const handleChange = (val: SortingTabsValues) => {
    setValue(val);
    onChange(val);
  };

  return (
    <div className="sm:hidden">
      <label htmlFor="question-tabs" className="sr-only">
        Select a tab
      </label>
      <Listbox value={value} onChange={handleChange}>
        <Listbox.Button className="block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          {value}
        </Listbox.Button>
        <Listbox.Options>
          {Object.values(SortingTabsValues).map((option) => (
            <Listbox.Option key={option} value={option} className="mt-1">
              {option}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};
