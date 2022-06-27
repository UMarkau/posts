/* eslint-disable jsx-a11y/anchor-is-valid */
function App() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* <!--
    When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars

    Menu open: "fixed inset-0 z-40 overflow-y-auto", Menu closed: ""
  --> */}
      <header className="bg-white shadow-sm lg:static lg:overflow-y-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
            <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
              <div className="flex-shrink-0 flex items-center">
                <a href="#">
                  <img
                    className="block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=blue&shade=500"
                    alt="Workflow"
                  />
                </a>
              </div>
            </div>
            <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
              <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                <div className="w-full">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      {/* <!-- Heroicon name: solid/search --> */}
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
              {/* <!-- Mobile menu button --> */}
              <button
                type="button"
                className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>
                {/* <!--
              Icon when menu is closed.

              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* <!--
              Icon when menu is open.

              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            --> */}
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
              <a
                href="#"
                className="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {" "}
                New Post{" "}
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <nav className="lg:hidden" aria-label="Global">
          <div className="mt-6 max-w-3xl mx-auto px-4 sm:px-6">
            <a
              href="#"
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              {" "}
              New Post{" "}
            </a>
          </div>
        </nav>
      </header>

      <div className="py-10">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
          <main className="lg:col-span-8">
            <div className="px-4 sm:px-0">
              <div className="sm:hidden">
                <label htmlFor="question-tabs" className="sr-only">
                  Select a tab
                </label>
                <select
                  id="question-tabs"
                  className="block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  {/* selected */}
                  <option>ID</option>

                  <option>Most Comments</option>
                </select>
              </div>
              <div className="hidden sm:block">
                <nav
                  className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
                  aria-label="Tabs"
                >
                  {/* <!-- Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" --> */}
                  <a
                    href="#"
                    aria-current="page"
                    className="text-gray-900 rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                  >
                    <span>ID</span>
                    <span
                      aria-hidden="true"
                      className="bg-blue-500 absolute inset-x-0 bottom-0 h-0.5"
                    ></span>
                  </a>

                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-700 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                  >
                    <span>Most Comments</span>
                    <span
                      aria-hidden="true"
                      className="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
                    ></span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="sr-only">Recent questions</h1>
              <ul className="space-y-4">
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
                          What would you have done differently if you ran
                          Jurassic Park?
                        </h2>
                        <div className="mt-2 text-sm text-gray-700 space-y-4">
                          <p>
                            Jurassic Park was an incredible idea and a
                            magnificent feat of engineering, but poor protocols
                            and a disregard for human safety killed what could
                            have otherwise been one of the best businesses of
                            our generation.
                          </p>
                          <p>
                            Ultimately, I think that if you wanted to run the
                            park successfully and keep visitors safe, the most
                            important thing to prioritize would be&hellip;
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
                                    <a
                                      href="#"
                                      className="font-medium text-gray-900"
                                    >
                                      Leslie Alexander{" "}
                                      <span className="font-normal text-gray-500">
                                        @lesliea
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mt-1 text-sm text-gray-700">
                                    <p>
                                      Ducimus quas delectus ad maxime totam
                                      doloribus reiciendis ex. Tempore dolorem
                                      maiores. Similique voluptatibus tempore
                                      non ut.
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

                {/* <!-- More posts... --> */}
              </ul>
            </div>
          </main>
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-4 space-y-4">
              <section aria-labelledby="who-to-follow-heading">
                <div className="bg-white rounded-lg shadow">
                  <div className="p-6">
                    <h2
                      id="who-to-follow-heading"
                      className="text-base font-medium text-gray-900"
                    >
                      Other users
                    </h2>
                    <div className="mt-6 flow-root">
                      <ul className="-my-4 divide-y divide-gray-200">
                        <li className="flex items-center py-4 space-x-3">
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              <a href="#">Leonard Krasner</a>
                            </p>
                            <p className="text-sm text-gray-500">
                              <a href="#" className="hover:underline">
                                @driesvincent
                              </a>
                            </p>
                          </div>
                        </li>

                        {/* <!-- More users... --> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
