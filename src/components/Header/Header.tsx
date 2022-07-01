/* eslint-disable jsx-a11y/anchor-is-valid */

interface IHeaderProps {
  onAddNewPostClick: () => void;
}

export const Header = ({ onAddNewPostClick }: IHeaderProps) => {
  return (
    <header className="bg-white p-3 shadow-sm lg:static lg:overflow-y-visible">
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
          <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-10">
            <button
              onClick={onAddNewPostClick}
              className="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              New Post
            </button>
          </div>
        </div>
      </div>
      <nav className="lg:hidden" aria-label="Global">
        <div className="mt-6 max-w-3xl mx-auto px-4 sm:px-6">
          <button
            onClick={onAddNewPostClick}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            New Post
          </button>
        </div>
      </nav>
    </header>
  );
};
