import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './TodoContext';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  padding:40px 20px 80px;
  overflow-x:hidden;
  overflow-y:scroll;
`;

function TodoList({ categories }){
  const todos = useTodoState();

  const [
    { 
        id: currentCategory 
    }
  ] = categories.filter(category => category.active === true);

  let _todos = todos;

  if (currentCategory === 'incomplete') { //미완료
      _todos = todos.filter(todo => todo.done === false);
  } else if (currentCategory === 'complete') { //완료
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