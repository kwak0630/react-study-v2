import React from 'react'
import styled from 'styled-components';

const PaginationBlock = styled.div`
  margin-top: 45px;
  text-align: center;
  button{
    width: 15px;
    height: 15px;
    &.btn-prev{
        transform: rotate(90deg);
    }
    &.btn-next{
        transform: rotate(-90deg)
    }
    &:disabled{
        opacity:0.4
    }
  }
  .paging{
    margin:0 20px;
    button{
      width: 20px;
      height: 25px;
      margin: 0 5px;
      
      font-size: 15px;
      font-family: Nunito, sans-serif;

      &[aria-current] {
          // border-bottom: 2px solid #ff9800;
          border-bottom: 3px solid #ffe281;
          font-weight:900;
          cursor: revert;
          transform: revert;
      }
    }
  }
`;

function Pagination ({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <PaginationBlock>
        <button 
            onClick={() => setPage(page - 1)} 
            disabled={page === 1} 
            className="btn-prev"
        >
            <img src={require('../../assets/images/ico_arrow.png')} alt="arrow icon" />
        </button>
        <span className='paging'>
        {Array(numPages)
            .fill()
            .map((_, i) => (
            <button
                key={i + 1}
                onClick={() => setPage(i + 1)}
                aria-current={page === i + 1 ? "page" : null}
                className="btn-num"
              >
                {i + 1}
            </button>
        ))}
        </span>
        <button 
            onClick={() => setPage(page + 1)} 
            disabled={page === numPages}
            className="btn-next"
        >
            <img src={require('../../assets/images/ico_arrow.png')} alt="arrow icon" />
        </button>
    </PaginationBlock>
  )
}

export default Pagination