import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useBoardState } from './BoardContext';
import BoardPagination from './BoardPagination';

function BoardList() {
  const boardItems = useBoardState();

  const [limit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  console.log(boardItems)
  
  return (
    <>
      <div className='title-wrap'>
        <h2>📔 Board</h2>
        <div className='side'>
            총<em>{boardItems.length}</em>개
        </div>
      </div>

      <ul className="board-list">
        {boardItems.slice(offset, offset + limit).map(({id, title, content}) =>
        <li key={id}>
          <Link to={`BoardDetail/${id}`} state={{ title: title, content: content }}>
            <div className="board-item">
              {/* <span className="num">{id}</span> */}
              <span className="num">📔</span>
              <div className="cont">
                <strong>{title}</strong>
                {content.split("<br/>").map((line, index) => { //this.props.data.content: 내용
                  return (
                    <span key={index}>
                      {line}
                    </span>
                  );
                })}
              </div>
            </div>
          </Link>                    
        </li>
        )}
      </ul>

      {/* 페이징 */}
      <BoardPagination 
        total={boardItems.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </>
  );
}

export default BoardList;