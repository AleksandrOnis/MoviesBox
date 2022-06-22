import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { color, deviceScreen } from 'utils/stylesVars';

export function Pagination({ getPage, pageCount }) {
  const handlePageClick = event => {
    getPage(event.selected + 1);
  };

  return (
    pageCount > 1 && (
      <MyPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={2}
      />
    )
  );
}

const MyPaginate = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2px;

  ${deviceScreen.M} {
    gap: 10px;
  }
  ${deviceScreen.L} {
    gap: 15px;
  }
  li a {
    border-radius: 7px;
    padding: 0.1rem 0.5rem;
    border: ${color.accent} 1px solid;
    cursor: pointer;

    ${deviceScreen.M} {
      gap: 10px;
      padding: 0.1rem 1rem;
    }
    ${deviceScreen.L} {
      gap: 15px;
      padding: 0.2rem 1.2rem;
      font-size: 14px;
    }
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: ${color.accent};
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
