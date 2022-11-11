import React from 'react';
import styled, {css} from 'styled-components';

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
    right: -30px; 
    display: flex;
    align-items: center;
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
`;

function TodoItem({todo, onCheck, onRemove, onChangeSelectedTodo, onInsertToggle}){
    const {id, text, done} = todo;
    
    return (
        <TodoItemBlock id={id}>
            {/* 체크박스 (s) */}
            <Check done={done} onClick={() => onCheck(id)}>{done ? '✓' : ''}</Check>
            {/* //체크박스 (e) */}

            {/* 할 일 내용 (s) */}
            <Text done={done}>
                {text}
            </Text>
            {/* //할 일 내용 (e) */}

            {/* 수정, 삭제 (s) */}
            <BtnBox>
                <Edit onClick={() =>
                    {
                        onChangeSelectedTodo(todo)
                        onInsertToggle();
                    }
                }>
                        수정
                </Edit>
                <Remove onClick={() => onRemove(id)}>
                    삭제
                </Remove>
            </BtnBox>
            {/* //수정, 삭제 (e) */}
        </TodoItemBlock>
    )
}

export default TodoItem;

            
/* <div className="check" done={done}>
{done ? '✅' : '🟩'}
</div>
<LineWrap done={done}>{done && <Line />}</LineWrap>
<Check done={done}></Check>
<Text done={done}>
{text}
{done && <Line done={done}/>}
</Text> */