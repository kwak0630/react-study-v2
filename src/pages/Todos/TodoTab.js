import React from "react";
import styled from 'styled-components';
// import { useTodoState } from './TodoContext';
import { useCategoryState } from './TabContext'; 

const TodoTabBlock = styled.div`
  padding: 0 0 20px;
  border-bottom: 1px solid #ddd;
  .tab-wrap{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 30px 0;
    li{
      padding: 5px 15px;
      border: 1px solid #ddd;
      border-radius: 15px;
      cursor: pointer;
      transition: 0.125s all ease-in;
      &.active{
        background: #ffe281;
        border-color: #ffe281;
      }
    }
  }
`;

function TodoTab () {
  // const todos = useTodoState();
  const categories = useCategoryState();
  // const dispatch = useCategoryDispatch();

  // const onToggle = () => dispatch({ type: 'TOGGLE', id })


  // 탭 클릭 (카테고리 변경)
  const onChangeCategory = (id) => {
    categories.map((category) => {
      return category.id === id ? { ...category, active: true } : { ...category, active: false}
    })

    // const currentCategory = id;
    // console.log("🌀🌀🌀click: " + id)
    // console.log("💈💈💈Tab currentCatrgory: "+currentCategory)
  }

  return(
    <TodoTabBlock>
      <ul className="tab-wrap">
          {categories.map((category) =>
            <li
              key={category.id}
              id={category.id}
              // onClick={onToggle}
              className={category.active ? 'active' : ''}
              onClick={() => onChangeCategory(category.id)}
            >
              <span>{category.id}</span>
            </li>
          )}
      </ul>
    </TodoTabBlock>
  )
}

export default TodoTab;