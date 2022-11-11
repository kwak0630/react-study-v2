import React, { useState, useEffect, useRef } from 'react'
// import React from 'react'

// import { TodoProvider } from '../TodoContext';
import styled from 'styled-components';

import TodoHeader from './TodoHeader';
import TodoTab from './TodoTab';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';
import TodoEdit from './TodoEdit';

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
  // 할 일
  const [todos, setTodos] = useState([
    {
      id: 99,
      text: '리액트 공부',
      done: false
    },
    {
      id: 98,
      text: '투두리스트 템플릿 작업',
      done: true
    },
    {
      id: 97,
      text: '목록, 등록, 수정, 삭제, 체크 작업',
      done: true
    },
    {
      id: 96,
      text: '미 완료 카운트 작업',
      done: true
    },
    {
      id: 95,
      text: '오늘 날짜 작업',
      done: true
    },
    {
      id: 94,
      text: '카테고리 탭 나누기',
      done: true
    },
    {
      id: 93,
      text: 'swiper 연습',
      done: true
    },
    {
      id: 92,
      text: 'router로 링크 이동, 페이지 id 값',
      done: true
    },
    {
      id: 91,
      text: '게시판 목록, 상세페이지 작업',
      done: true
    },
    {
      id: 90,
      text: '더보기(페이징) 목록',
      done: true
    },
    {
      id: 89,
      text: '뒤로가기 버튼 작업',
      done: true
    }
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
  
  // 할 일 추가
  const nextId = useRef(0);
  const onSubmit = (text) => {
    const todo = {
      id: nextId.current,
      text,
      done: false,
    };
    const newList = todos.concat(todo);
    // setTodos(todos.concat(todo));
    setTodos(newList);
    nextId.current ++; 

    // const todoAdd = {name: todos};
    // window.localStorage.setItem("todo", JSON.stringify(todoAdd))
    window.localStorage.setItem("todos", JSON.stringify(newList))
  };

  
    // 할 일 삭제
  const onRemove = (id) => {
    // setTodos(todos.filter((todo) => todo.id !== id));

    const removeList = todos.filter((todo) => todo.id !== id)
    setTodos(removeList);
    
    localStorage.setItem('todos', JSON.stringify(removeList));
  };

  // 할 일 체크
  const onCheck = (id) => {
    // setTodos(
    //   todos.map((todo) => {
    //   return todo.id === id ? { ...todo, done: !todo.done } : todo;
    //   })
    // );

    const newList = 
      todos.map((todo) => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      })

      setTodos(newList);
      localStorage.setItem('todos', JSON.stringify(newList));
  };

  // 할 일 수정
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle((prev) => !prev);
  };
  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };
  const onUpdate = (id, text) => {
    onInsertToggle();
    
    // console.log(id);
    // console.log(text);
    // setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));


    const newList = 
      todos.map((todo) => 
        (todo.id === id ? { ...todo, text } : todo)
      );

      setTodos(newList);
      localStorage.setItem('todos', JSON.stringify(newList));
  };


  useEffect(()=>{
    const localList = localStorage.getItem('todos');
    if(localList) setTodos(JSON.parse(localList)); //최초 렌더링 시 로컬스토리지에 저장된 값이 있으면 리스트에 셋한다.
  },[])

    // localStorage.clear(); 로컬스토리지 내용 ㅈㅣ우기~
    return (
      <TodoTemplateBlock>
        <TodoHeader todos={todos} />
        <TodoTab 
            categories={categories} 
            onChangeCategory={onChangeCategory}
        />
        <TodoList 
            categories={categories} 
            todos={todos} 
            onRemove={onRemove} 
            onCheck={onCheck}
            onInsertToggle={onInsertToggle} 
            onChangeSelectedTodo={onChangeSelectedTodo}
        /> 

        <TodoCreate onSubmit={onSubmit} />

        {insertToggle && (
          <TodoEdit onUpdate={onUpdate} selectedTodo={selectedTodo} />
        )}

      </TodoTemplateBlock>
    )
}

export default TodoTemplate;