// import React, { useState, useEffect, useRef, useContext } from 'react'
import React from 'react'

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { TodoProvider } from './TodoContext';
import { CategoryProvider } from './TabContext';
import styled from 'styled-components';

import TodoNotice from './TodoNotice';
import TodoHeader from './TodoHeader';
import TodoTab from './TodoTab';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';
// import TodoEdit from './TodoEdit';


// import Home from '../Home';
// import NotFound from '../NotFound';
// import Users from '../Users';

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
          {/* <BrowserRouter> */}
            <TodoNotice/>
            <TodoHeader/>
{/* 
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Users" element={<Users />}></Route>\
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
           */}
            <TodoTab />
            <TodoList  />
            <TodoCreate />
            {/* 
            {insertToggle && (
              <TodoEdit onUpdate={onUpdate} selectedTodo={selectedTodo} />
            )} */}
            {/* </BrowserRouter> */}
          </TodoTemplateBlock>
        </CategoryProvider>
      </TodoProvider>
    )
}

export default TodoTemplate;