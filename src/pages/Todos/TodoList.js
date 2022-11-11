import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './TodoContext';
import { useCategoryState } from './TabContext';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  padding:40px 20px 80px;
  overflow-x:hidden;
  overflow-y:scroll;
`;

function TodoList(){
  const todos = useTodoState();
  const categories = useCategoryState();
  // const _todos = todos;

  const [
    { 
      id: currentCategory 
    }
  ] = categories.filter(category => category.active === true);

  // console.log("todos: " +todos.todo)
  let _todos = todos;

  console.log("List currentCategory: "+currentCategory)

  if (currentCategory === 'incomplete') { //미완료
    console.log("응?")
    _todos = todos.filter(todo => todo.done === false);

  } else if (currentCategory === 'complete') { //완료
    console.log("응응??")
    _todos = todos.filter(todo => todo.done === true);
  }

  return (
    <TodoListBlock>
      {_todos.map((todo) =>
        <TodoItem 
          todo={todo}
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      )}
    </TodoListBlock>
  )
}

export default TodoList;