import React, { useState, useEffect, useRef } from 'react';
import styled, {css} from 'styled-components';
import { useTodoDispatch, useTodoNextId } from './TodoContext';

const TodoCreateBlock = styled.div`
`;

const CreateBox = styled.div`
    position: absolute;
    bottom: 35px;
    right: 95px;
    display: flex;
    align-items: center;
    transition: 0.2s all ease-in;
    opacity: 0;
    .input-text{
        width: 170px;
        height: 45px;
        padding: 0 10px;
        border:1px solid #ddd;
        border-radius: 5px;
    }
    .btn-type{
        width: 60px;
        height: 45px;
        margin-left: 10px;
        padding:0;
        border: none;
        border-radius: 5px;
        background: #ffe281;
        font-weight: 700;
        font-size: 15px;
    }
    ${props =>
        props.open &&
        css`
            opacity: 1;
      `}
`;

const CreateBtn = styled.div`
    position: absolute;
    bottom: 30px;
    right: 30px;
    width: 55px;
    height: 55px;
    border-radius: 100%;
    background: #ffe281;
    font-size: 0;
    &:before{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 2px;
        background: #000;
        transform: translate(-50%, -50%);
        transition: 0.125s all ease-in;
    }
    &:after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 2px;
        height: 20px;
        background: #000;
        transform: translate(-50%, -50%);
        transition: 0.125s all ease-in;
    }
    ${props =>
        props.open &&
        css`
        &:before {
            transform: translate(-50%, -50%) rotate(45deg);
        }
        &:after {
            transform: translate(-50%, -50%) rotate(45deg);
        }
      `}
`;

function TodoCreate(){
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const ref = useRef();

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  // 클릭시 오픈/닫기
  const onToggle = () => {
    setOpen(!open);
    ref.current.focus();
  }
  
  const onChange = (e) =>{
    setValue(e.target.value);
  }

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
        onSubmit();
    }
  };
  const onSubmit = (e) => {
    e.preventDefault(); // onSubmit 이벤트는 브라우저를 새로고치기 때문에 막아주기

    setValue("");
    setOpen(!open);
    nextId.current ++; 
  };

  useEffect(() => {
    ref.current.focus();

    const localData = localStorage.getItem('todos');
    if (localData) {
      const TodoList = JSON.parse(localData);
      dispatch({ type: 'INIT', todo: TodoList });
    }
  });
  
  return (
    <TodoCreateBlock>
      {/* {open && ( */}
      <form onSubmit={onSubmit}>
          <CreateBox open={open}>
              <input
                  type="text"
                  className="input-text" 
                  placeholder='할 일을 입력하세요.'
                  value={value}
                  onChange={onChange}
                  ref={ref}
              />
              <button 
                  type="submit" 
                  className='btn-type'
                  onClick={onSubmit}
                  onKeyPress={onKeyPress}
              >
                  추가
              </button>
          </CreateBox>
      </form>
      {/* )} */}
      <CreateBtn onClick={onToggle} open={open}>
          추가
      </CreateBtn>
    </TodoCreateBlock>
  )
}
export default React.memo(TodoCreate);