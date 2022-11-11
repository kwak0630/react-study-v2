import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    padding:40px 20px 80px;
    overflow-x:hidden;
    overflow-y:scroll;
`;

function TodoList({todos, onCheck, onRemove, onChangeSelectedTodo, onInsertToggle, categories}){
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
                    onCheck={onCheck}
                    onRemove={onRemove}
                    onChangeSelectedTodo={onChangeSelectedTodo}
                    onInsertToggle={onInsertToggle}
                />
            )}
            {/* <TodoItem text="React 공부" />
            <TodoItem text="TodoList Template" done={true} /> */}
        </TodoListBlock>
    )
}

export default TodoList;