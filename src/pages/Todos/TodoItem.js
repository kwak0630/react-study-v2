import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import { useTodoDispatch } from './TodoContext';

const Check = styled.div`
    width: 23px;
    height: 23px;
    margin-right: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
    // box-shadow: 1px 0 8px 2px rgba(0,0,0,0.05);
    font-size: 16px;
    text-align: center;
    line-height: 23px;
    color: #000;
    transition: 0.125s all ease-in;
    cursor: pointer;
    ${props =>
    props.done &&
    css`
      background: #ffe281;
      border-color: #ffe281;
    `}
    
`;

const Text = styled.div`
    position: relative;
    padding: 0 3px;
    font-size: 17px; 
    // font-family: 'NanumSquareRound';
    transition: 0.125s all ease-in;
    ${props =>
    props.done &&
    css`
      color: #929292;
      &:before{
        //content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 2px;
        background: #ffe281;
        transform: translate(0, -50%);
      }
    `}
`;

const BtnBox = styled.div`
    position: absolute;
    top: 20%;
    right: -20px; 
    display: flex;
    align-items: center;
    button{
      font-size: 12px;
      color: #999;
      &+button{
        padding: 0 15px;
      }
    }
`;

const Edit = styled.div`
    font-size: 12px;
    color: #999;
    margin-right: 15px;
    opacity: 0;
    transition: 0.125s all ease-in;
`;

const Remove = styled.div`
    width: 40px;
    height: 20px;
    font-size: 0;
    opacity: 0;
    transition: 0.125s all ease-in;
    &:before{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 15px;
        height: 1px;
        background: #000;
        transform: translate(-50%, -50%) rotate(45deg);
    }
    &:after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1px;
        height: 15px;
        background: #000;
        transform: translate(-50%, -50%) rotate(45deg);
    }
    ${props =>
    props.done &&
    css`
      color: #929292;
    `}
    
`;

const TodoItemBlock = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    margin-bottom: 15px;
    &:hover {
        ${Remove} {
            cursor: pointer;
            opacity: 1;
        }
        ${Edit} {
            cursor: pointer;
            opacity: 1;
        }
    }

    input{
      padding: 10px;
      border: 1px solid #ddd;
    }
`;

function TodoItem({id, text, done}){
  const dispatch = useTodoDispatch();
  const onCheck = () => dispatch({ type: 'CHECK', id })
  const onRemove = () => dispatch({ type: 'REMOVE', id })
  const onEdit = () => dispatch({ type: 'EDIT', id, text: value, done: false })

  const [mode, setMode] = useState(true);
  const [value, setValue] = useState('');
  
  const onChangeText  = (e) =>{
    setValue(e.target.value);
  }

  const onClickChange = () => {
    setMode(false);
  };
	
  // mode ?????? -> true (?????? ?????? ?????????)
  const onCancleChange = () => {
    setMode(true);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onChange();
    }
  };

  const onChange = () => {
    // console.log(id)
    // console.log(value)

    onEdit();

    setValue("");
    setMode(true);
  };


  return (
    <TodoItemBlock>
      <Check done={done} onClick={onCheck}>{done ? '???' : ''}</Check>

      {mode ? (
        <Text done={done}>
          {text}
        </Text>
      ) : (
        <div>
          <input defaultValue={text} onChange={onChangeText} />
        </div>
      )}
      {mode ? (
        <BtnBox>
          <Edit onClick={() =>
              {
                onClickChange();
              }
          }>
                  ??????
          </Edit>
          <Remove onClick={onRemove}>
            ??????
          </Remove>
        </BtnBox>
      ) : (
        <BtnBox>
          <button onClick={onCancleChange}>??????</button>
          <button 
            type="submit" 
            onClick={onChange}
            onKeyPress={onKeyPress}
          >
            ??????
          </button>
        </BtnBox>
      )}
    </TodoItemBlock>
  )
}

export default React.memo(TodoItem);
