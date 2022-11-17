import React from 'react';
import { useNavigate } from 'react-router-dom';

function BoardItem({id, title, content}){

  const navigate = useNavigate();
  
  const goDetail = () => {
    navigate(`/pages/Board/BoardDetail/${id}`);
  };

  return (
    <div className="board-item" onClick={goDetail}>
        {/* <span>📔</span> */}
        <span className="num">{id}</span>
        <div className="cont">
            <strong>{title}</strong>
            {/* <p>{content}</p> */}
            {content.split("<br/>").map((line, index) => { //this.props.data.content: 내용
            return (
                <span key={index}>
                    {line}
                </span>
            );
            })}
        </div>
    {/* <BoardItem 
        boardItem={boardItem} 
        boardItems={boardItems} 
        key={boardItem.id}
        id={boardItem.id}
        title={boardItem.title}
        content={boardItem.content}
    /> */}
    </div>
  )
}

export default BoardItem;
