import React from "react"; // Make sure to import React if you haven't already
// import { useRouter } from "next/router";

const Pagination = ({
  total,
  showPerPage,
  currentPage = 1,
  onPageChange,
  onNextClick,
  onPrevClick,
}: any) => {
  // const router = useRouter();
  // const { locale } = router;
  // console.log(total.current);
  const total_pages = Math.ceil(total / showPerPage);
  let startPage = currentPage - 2 <= 0 ? 1 : currentPage - 2;
  let endPage = currentPage + 2 >= total_pages ? total_pages : currentPage + 2;

  // Adjust start and end pages if they go beyond total pages
  if (startPage === 1) {
    endPage = 5 > total_pages ? total_pages : 5;
  } else if (endPage === total_pages) {
    startPage = total_pages - 4 <= 0 ? 1 : total_pages - 4;
  }

  const page_numbers = Array.from(
    { length: total_pages },
    (_, index) => index + 1
  ).slice(startPage - 1, endPage);

  const handleEllipsisClick = (direction) => {
    const newPage =
      direction === "next"
        ? Math.min(endPage + 1, total_pages)
        : Math.max(startPage - 1, 1);
    onPageChange(newPage);
  };

  return (
    <nav
      className="flex items-center justify-center"
      aria-label="Page Navigation"
    >
      <button
        onClick={() => onPrevClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={`inline-flex items-center justify-center border-0 bg-transparent ${
          currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <i
          className={`ri-arrow-${
            // locale === "ar" ?
            "right"
            //  : "left"
          }-s-line text-[20px]`}
        />
      </button>

      {
        <>
          {startPage > 1 && (
            <>
              <button
                onClick={() => onPageChange(1)}
                className={`ease mx-2 h-10 w-10 cursor-pointer rounded-full border  bg-white transition duration-300 hover:bg-[#E1ECFF] disabled:bg-[#E1ECFF] disabled:text-[#1a428a]`}
              >
                1
              </button>
              {startPage > 2 && (
                <button
                  onClick={() => handleEllipsisClick("prev")}
                  className={`ease mx-2 h-10 w-10 cursor-pointer rounded-full border  bg-white transition duration-300 hover:bg-[#E1ECFF] disabled:bg-[#E1ECFF] disabled:text-[#1a428a]`}
                >
                  ...
                </button>
              )}
            </>
          )}

          {page_numbers.map((number) => (
            <button
              key={number}
              onClick={() => onPageChange(number)}
              disabled={currentPage === number}
              className={`ease mx-2 h-10 w-10 cursor-pointer rounded-full border  bg-white transition duration-300 hover:bg-[#E1ECFF] disabled:bg-[#E1ECFF] disabled:text-[#1a428a]`}
            >
              {number}
            </button>
          ))}

          {endPage < total_pages && (
            <>
              {endPage < total_pages - 1 && (
                <button
                  onClick={() => handleEllipsisClick("next")}
                  className={`ease mx-2 h-10 w-10 cursor-pointer rounded-full border  bg-white transition duration-300 hover:bg-[#E1ECFF] disabled:bg-[#E1ECFF] disabled:text-[#1a428a]`}
                >
                  ...
                </button>
              )}
              <button
                onClick={() => onPageChange(total_pages)}
                className={`ease mx-2 h-10 w-10 cursor-pointer rounded-full border  bg-white transition duration-300 hover:bg-[#E1ECFF] disabled:bg-[#E1ECFF] disabled:text-[#1a428a]`}
              >
                {total_pages}
              </button>
            </>
          )}
        </>
      }

      <button
        onClick={() => onNextClick(currentPage + 1)}
        disabled={currentPage === total_pages}
        className={`inline-flex cursor-pointer items-center justify-center border-0  bg-transparent ${
          currentPage === total_pages ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <i
          className={`ri-arrow-${
            // locale === "ar"
            // ?
            "left"
            //  : "right"
          }-s-line text-[20px]`}
        />
      </button>
    </nav>
  );
};

export default Pagination;
