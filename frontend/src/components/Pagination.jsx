function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={
            currentPage === page ? "active-page" : ""
          }
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;