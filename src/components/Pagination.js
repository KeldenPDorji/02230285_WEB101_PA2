"use client";

import React from 'react';

const PaginationComponent = ({ totalPages, currentPage, onPageChange }) => {
  const maxPagesToShow = 5;
  const pages = [];

  let startPage, endPage;
  if (totalPages <= maxPagesToShow) {
    startPage = 1;
    endPage = totalPages;
  } else {
    startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = endPage - maxPagesToShow + 1;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="pagination">
      {/* Previous Button */}
      <button 
        onClick={() => handlePageClick(currentPage - 1)} 
        disabled={currentPage === 1}
        className="pagination-nav"
      >
        ← Previous
      </button>

      {/* First Page */}
      {startPage > 1 && (
        <>
          <button 
            onClick={() => handlePageClick(1)} 
            className="pagination-number"
          >
            1
          </button>
          {startPage > 2 && <span className="pagination-ellipsis">...</span>}
        </>
      )}

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`pagination-number ${page === currentPage ? 'active' : ''}`}
        >
          {page}
        </button>
      ))}

      {/* Last Page */}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="pagination-ellipsis">...</span>}
          <button 
            onClick={() => handlePageClick(totalPages)} 
            className="pagination-number"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next Button */}
      <button 
        onClick={() => handlePageClick(currentPage + 1)} 
        disabled={currentPage === totalPages}
        className="pagination-nav"
      >
        Next →
      </button>

      {/* Page Info */}
      <div className="pagination-info">
        Page <span className="current-page-highlight">{currentPage}</span> of {totalPages}
      </div>
    </div>
  );
};

export default PaginationComponent;
