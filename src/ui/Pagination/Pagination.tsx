import React from 'react';
import ReactPaginate from 'react-paginate';
import style from './Pagination.module.css';

export interface IPaginationProps {
  initialPage?: number;
  marginPagesDisplayed?: number;
  pageCount: number;
  pageRangeDisplayed?: number;
  onChange: ({ selected }: { selected: number }) => void;
}

const Pagination: React.FC<IPaginationProps> = ({
  initialPage,
  marginPagesDisplayed,
  pageCount,
  pageRangeDisplayed,
  onChange,
}) => {
  return (
    <ReactPaginate
      className={style.Pagination}
      initialPage={initialPage}
      marginPagesDisplayed={marginPagesDisplayed}
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      onPageChange={onChange}
      containerClassName="Pagination"
      activeClassName={style.Pagination__active}
      pageLinkClassName="Pagination__page-link"
      breakLinkClassName="Pagination__break-link"
      nextLinkClassName="Pagination__next-link"
      previousLinkClassName="Pagination__previous-link"
      pageClassName="Pagination__page-item"
      breakClassName="Pagination__break-item"
      nextClassName="Pagination__next-item"
      previousClassName="Pagination__previous-item"
      previousLabel="<"
      nextLabel=">"
    />
  );
};

export default Pagination;
