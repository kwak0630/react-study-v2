import React from 'react'

import { TodoProvider } from './TodoContext';
import { CategoryProvider } from './TabContext';
import styled from 'styled-components';

import TodoNotice from './TodoNotice';
import TodoHeader from './TodoHeader';
// import TodoTab from './TodoTab';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';
// import TodoEdit from './TodoEdit';

const TodoTemplateBlock = styled.div`
  position: relative;

  overflow: hidden;
  display: flex;
  flex-direction: column;

  width: 370px;
  height: 768px;
  margin: 100px auto 0;

  background: white;
  border-radius: 20px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

function TodoTemplate(){
    return (
      <TodoProvider>
        <CategoryProvider>
          <TodoTemplateBlock>
            <TodoNotice/>
            <TodoHeader/>
            {/* <TodoTab /> */}
            <TodoList  />
            <TodoCreate />
            {/* 
            {insertToggle && (
              <TodoEdit onUpdate={onUpdate} selectedTodo={selectedTodo} />
            )} */}
          </TodoTemplateBlock>
        </CategoryProvider>
      </TodoProvider>
    )
}

export default TodoTemplate;