import React from "react";
import { Link } from "react-router-dom";
import { useBoardState } from './BoardContext';

function BoardList() {
    const boardItems = useBoardState();

    return (
        <>
            <div className='title-wrap'>
                <h2>📔 Board</h2>
                <div className='side'>
                    총<em>{boardItems.length}</em>개
                </div>
            </div>

            <ul className="board-list">
                {boardItems.map(({id, title, content}) =>
                <li key={id}>
                    <Link to={`BoardDetail/${id}`} state={{ title: title, content: content }}>
                        <div className="board-item">
                            <span className="num">{id}</span>
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
        
        </>
    );
}

export default BoardList;