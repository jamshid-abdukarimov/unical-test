import React from "react";

const Prev = () => (
  <svg
    width={14}
    height={8}
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.1665 4H12.8332"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.1665 4L4.49984 7.33333"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.1665 4.00002L4.49984 0.666687"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Next = () => (
  <svg
    width={14}
    height={8}
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.1665 4H12.8332"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 7.33333L12.8333 4"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 0.666687L12.8333 4.00002"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Dots = () => (
  <button className="text-sm font-medium leading-none  text-gray-600 hover:text-indigo-700 border border-transparent mr-4 w-7 h-7 rounded-md">
    ...
  </button>
);

const Pagination = ({
  currentPage = 1,
  setCurrentPage,
  allPages = 10,
}: {
  currentPage: number;
  setCurrentPage:
    | React.Dispatch<React.SetStateAction<number>>
    | ((page: number) => void);
  allPages: number;
}) => {
  return (
    <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4 w-full">
      <div className="lg:w-3/5 w-full  flex items-center justify-center sm:justify-between border-gray-200">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="hidden sm:flex items-center text-gray-600 hover:text-indigo-700 "
        >
          <Prev />
          <p className="text-sm ml-3 font-medium leading-none ">Oldingi</p>
        </button>
        <div className="flex">
          {allPages >= 10 ? (
            <>
              {currentPage >= 1 + 5 && (
                <>
                  <button
                    onClick={() => setCurrentPage(1)}
                    className="text-sm font-medium leading-none  text-gray-600 hover:text-indigo-700 border border-transparent mr-4 w-7 h-7 rounded-md"
                  >
                    1
                  </button>
                  {currentPage !== 1 + 5 && <Dots />}
                </>
              )}
              {Array(allPages)
                .fill(null)
                .map((_, i) => {
                  if (currentPage <= 3) {
                    if (i < 5) {
                      return (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i + 1)}
                          className={
                            currentPage === i + 1
                              ? "text-sm font-medium leading-none  text-white border border-indigo-400 bg-indigo-400 mr-4 w-7 h-7 rounded-md"
                              : "text-sm font-medium leading-none  text-gray-600 hover:text-indigo-700 border border-transparent mr-4 w-7 h-7 rounded-md"
                          }
                        >
                          {i + 1}
                        </button>
                      );
                    }
                  } else {
                    if (i + 1 >= currentPage - 4 && i + 1 <= currentPage + 4) {
                      return (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i + 1)}
                          className={
                            currentPage === i + 1
                              ? "text-sm font-medium leading-none  text-white border border-indigo-400 bg-indigo-400 mr-4 w-7 h-7 rounded-md"
                              : "text-sm font-medium leading-none  text-gray-600 hover:text-indigo-700 border border-transparent mr-4 w-7 h-7 rounded-md"
                          }
                        >
                          {i + 1}
                        </button>
                      );
                    }
                  }
                })}
              {currentPage <= allPages - 5 && (
                <>
                  {currentPage <= allPages - 5 && <Dots />}
                  <button
                    onClick={() => setCurrentPage(allPages)}
                    className="text-sm font-medium leading-none  text-gray-600 hover:text-indigo-700 border border-transparent mr-4 w-7 h-7 rounded-md"
                  >
                    {allPages}
                  </button>
                </>
              )}
            </>
          ) : (
            <>
              {Array(allPages)
                .fill(null)
                .map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={
                      currentPage === i + 1
                        ? "text-sm font-medium leading-none  text-white border border-indigo-400 bg-indigo-400 mr-4 w-7 h-7 rounded-md"
                        : "text-sm font-medium leading-none  text-gray-600 hover:text-indigo-700 border border-transparent mr-4 w-7 h-7 rounded-md"
                    }
                  >
                    {i + 1}
                  </button>
                ))}
            </>
          )}
        </div>
        <button
          disabled={currentPage === allPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="hidden sm:flex items-center text-gray-600 hover:text-indigo-700 "
        >
          <p className="text-sm font-medium leading-none mr-3">Keyingi</p>
          <Next />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
