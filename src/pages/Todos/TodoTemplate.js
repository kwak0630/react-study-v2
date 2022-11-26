import React, {useState} from 'react'

import { TodoProvider } from './TodoContext';
// import { CategoryProvider } from './TabContext';
import styled from 'styled-components';

import TodoNotice from './TodoNotice';
import TodoHeader from './TodoHeader';
import TodoTab from './TodoTab';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';

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

  // 카테고리
  const [categories, setCategories] = useState([
    { 
      id: 'all', 
      active: true 
    },
    { 
      id: 'complete', 
      active: false 
    },
    { 
      id: 'incomplete', 
      active: false 
    },
  ]);

  // 탭 클릭 (카테고리 변경)
  const onChangeCategory = (id) => {
    setCategories(
      categories.map((category) => {
        return category.id === id ? { ...category, active: true } : { ...category, active: false}
      })
    );
      // console.log(id)
  }
  return (
    <TodoProvider>
      <TodoTemplateBlock>
        <TodoNotice/>
        <TodoHeader/>
        <TodoTab
          categories={categories}
          onChangeCategory={onChangeCategory}
        />
        <TodoList 
          categories={categories}
        />
        <TodoCreate />
      </TodoTemplateBlock>
    </TodoProvider>
  )
}

export default TodoTemplate;