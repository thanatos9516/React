import React from 'react';

const Paginator = props => (
  <nav aria-label='Page navigation example'>
    <ul className='pagination'>
      <li
        className={`page-item ${
          !props.paginatorData.has_previous_page ? 'disabled' : ''
        }`}
      >
        <a
          href='#'
          aria-label='First'
          className={`page-link`}
          onClick={event => {
            event.preventDefault();
            props.onPaginate(props.paginatorData.first_page);
          }}
        >
          <span>First</span>
        </a>
      </li>
      <li
        className={`page-item ${
          !props.paginatorData.has_previous_page ? 'disabled' : ''
        }`}
      >
        <a
          href='#'
          aria-label='Previous'
          className={`page-link`}
          onClick={event => {
            event.preventDefault();
            props.onPaginate(props.paginatorData.previous_page);
          }}
        >
          <span aria-hidden='true'>«</span>
          <span className='sr-only'>Previous</span>
        </a>
      </li>
      {props.pages.map((page, index) => (
        <li
          key={index}
          className={`page-item ${
            props.paginatorData.current_page === page ? 'active' : ''
          } ${
            (!props.paginatorData.has_previous_page &&
              !props.paginatorData.has_next_page) ||
            props.paginatorData.current_page === page
              ? 'disabled'
              : ''
          }`}
        >
          <a
            href='#'
            className={`page-link `}
            onClick={event => {
              event.preventDefault();
              props.onPaginate(page);
            }}
          >
            {page}
          </a>
        </li>
      ))}
      <li
        className={`page-item ${
          !props.paginatorData.has_next_page ? 'disabled' : ''
        }`}
      >
        <a
          href='#'
          aria-label='Next'
          className={`page-link`}
          onClick={event => {
            event.preventDefault();
            props.onPaginate(props.paginatorData.next_page);
          }}
        >
          <span aria-hidden='true'>»</span>
          <span className='sr-only'>Next</span>
        </a>
      </li>
      <li
        className={`page-item ${
          !props.paginatorData.has_next_page ? 'disabled' : ''
        }`}
      >
        <a
          href='#'
          aria-label='Last'
          className={`page-link`}
          onClick={event => {
            event.preventDefault();
            props.onPaginate(props.paginatorData.last_page);
          }}
        >
          <span>Last</span>
        </a>
      </li>
    </ul>
  </nav>
);

export default Paginator;