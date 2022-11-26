import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBoardDispatch, useBoardNextId } from './BoardContext';

function BoardCreate() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useBoardDispatch();
  const nextId = useBoardNextId();

  const onSubmit = () => {
    dispatch({
      type: 'CREATE',
      board: {
        id: nextId.current,
        title,
        content,
      },
    });
    nextId.current += 1;

    navigate(-1);
  };

  useEffect(() => {
    const localData = localStorage.getItem('BoardItems');
    if (localData) {
        const BoardList = JSON.parse(localData).sort(
            //(a, b) => parseInt(b.id) - parseInt(a.id),
        );

        if (BoardList.length >= 1) {
            nextId.current = parseInt(BoardList[0].id) + 1;
            dispatch({ type: 'INIT', board: BoardList });
        }
    }
  });
  
  return (
    <>
    <div className="form-wrap">
        <div className="form-item">
        <input
            type="text"
            className="input-text" 
            placeholder='제목을 입력해주세요.'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        </div>
        <div className="form-item">
        <textarea 
            placeholder='내용을 입력해주세요.'
            value={content}
            onChange={(e) => setContent(e.target.value)}
        >
        </textarea>
        </div>
        <button 
            type="submit" 
            className='btn-type'
            onClick={onSubmit}
        >
        등록하기
        </button>
    </div>
    </>
  );
}

export default BoardCreate;