import React from 'react';
import './Pagination.scss';

export default function Pagination({ paginator, setPage }) {
  function handleOnClick(e) {
    e.preventDefault();

    setPage(e.currentTarget.getAttribute('data-href'));
  }

  return (
    <nav className={'pagination'} title={'Pagination'}>
      <ul className={'list-unstyled'}>
        {paginator.links && paginator.links.length > 0
          ? paginator.links.map((link, index) => {
              if (link.url) {
                return (
                  <li key={index}>
                    <a
                      data-href={link.url}
                      className={link.active ? 'active' : ''}
                      dangerouslySetInnerHTML={{ __html: link.label }}
                      onClick={handleOnClick}
                    ></a>
                  </li>
                );
              }
            })
          : ''}
      </ul>
    </nav>
  );
}
