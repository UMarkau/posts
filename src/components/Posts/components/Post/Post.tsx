/* eslint-disable jsx-a11y/anchor-is-valid */
export const Post = () => {
  return (
    <li className="bg-white shadow sm:rounded-lg">
      <article aria-labelledby="question-title-81614">
        <div className="divide-y divide-gray-200">
          <div className="px-4 py-6 sm:p-6">
            <div className="flex space-x-3 items-center">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  <a href="#" className="hover:underline">
                    Dries Vincent
                  </a>
                </p>
                <p className="text-sm text-gray-500">
                  <a href="#" className="hover:underline">
                    @driesvincent
                  </a>
                </p>
              </div>
              <div className="flex-shrink-0 self-center flex">
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600"
                      id="options-menu-0-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open options</span>
                      {/* <!-- Heroicon name: solid/dots-vertical --> */}
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>

                  {/* <!--
                          Dropdown menu, show/hide based on menu state.

                          Entering: "transition ease-out duration-100"
                            From: "transform opacity-0 scale-95"
                            To: "transform opacity-100 scale-100"
                          Leaving: "transition ease-in duration-75"
                            From: "transform opacity-100 scale-100"
                            To: "transform opacity-0 scale-95"
                        --> */}
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu-0-button"
                    tabIndex={-1}
                  >
                    <div className="py-1" role="none">
                      {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                      <a
                        href="#"
                        className="text-gray-700 flex px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="options-menu-0-item-0"
                      >
                        {/* <!-- Heroicon name: solid/star --> */}
                        <svg
                          className="mr-3 h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                          <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                        </svg>
                        <span>Copy ID to clipboard</span>
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 flex px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="options-menu-0-item-0"
                      >
                        {/* <!-- Heroicon name: solid/star --> */}
                        <svg
                          className="mr-3 h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Delete</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2
              id="question-title-81614"
              className="mt-4 text-base font-medium text-gray-900"
            >
              What would you have done differently if you ran Jurassic Park?
            </h2>
            <div className="mt-2 text-sm text-gray-700 space-y-4">
              <p>
                Jurassic Park was an incredible idea and a magnificent feat of
                engineering, but poor protocols and a disregard for human safety
                killed what could have otherwise been one of the best businesses
                of our generation.
              </p>
              <p>
                Ultimately, I think that if you wanted to run the park
                successfully and keep visitors safe, the most important thing to
                prioritize would be&hellip;
              </p>
            </div>
          </div>
          <div>
            <div className="px-4 py-6 sm:p-6">
              <ul className="space-y-8">
                <li>
                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <svg
                        width="13"
                        height="35"
                        viewBox="0 0 13 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 0V26C1 30.4183 4.58172 34 9 34H13"
                          stroke="#9CA3AF"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm">
                        <a href="#" className="font-medium text-gray-900">
                          Leslie Alexander{" "}
                          <span className="font-normal text-gray-500">
                            @lesliea
                          </span>
                        </a>
                      </div>
                      <div className="mt-1 text-sm text-gray-700">
                        <p>
                          Ducimus quas delectus ad maxime totam doloribus
                          reiciendis ex. Tempore dolorem maiores. Similique
                          voluptatibus tempore non ut.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>

                {/* <!-- More comments... --> */}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
};
