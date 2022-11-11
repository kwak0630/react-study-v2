import React from "react";
import styled from 'styled-components';

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

function TodoTab ({categories, onChangeCategory}) {
    return(
        <TodoTabBlock>
            <ul className="tab-wrap">
                {categories.map((category) =>
                    <li
                        key={category.id}
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