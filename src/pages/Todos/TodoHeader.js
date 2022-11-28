import React from 'react';
import { Link } from "react-router-dom";
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import styled from 'styled-components';
import { useTodoState } from './TodoContext';
// import Users from '../Users';

const TodoHeaderBlock = styled.div`
    padding:40px 0 0;
    text-align: center;
    h1{
        font-size: 25px;
    }
    .sally{
        width: 60px;
    }
    .header-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 20px 0;
        .task{
            display: flex;
            justify-content: space-between;
            align-items: center;
            em{
                padding: 0 5px;
                font-size: 18px;
                font-weight: 700;
                color: #ff9800;
            }
        }
    }
    .tab-wrap{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 20px 30px 0;
        li{
            padding: 5px 15px;
            border: 1px solid #ddd;
            border-radius: 15px;
            button{
            }
            &.active{
                background: #ffe281;
                border-color: #ffe281;
                font-weight: 700;
            }
        }
    }
`;

function TodoHeader(){
    
    const todos = useTodoState();

    // 날짜
    const today = new Date();
    const year = today.getFullYear();
    const month = String(Number(today.getMonth()) + 1);
    const date = today.getDate();

    // const dateString = today.toLocaleDateString('ko-KR', {
    //   year: 'numeric',
    //   month: 'long',
    //   day: 'numeric'
    // });
    const dateString = year +'.' + month + "." + date + " ";
    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'short' }); // long or short (금요일 or 금)

    // const completeItem = todos.filter(todo => todo.done);
    const incompleteItem = todos.filter(todo => !todo.done);
    
    return (
        <TodoHeaderBlock>
            <img className="sally" src={require('../../assets/images/ico_sally.png')} alt="sally icon" />
            <nav className="nav-box">
                <Link to="../pages/Gallery">📸</Link>
                <Link to="../pages/Board">📔</Link>
                <Link to="./pages/Users">👩🏻‍💻</Link>
            </nav>
            <div className="header-box">
                <span className='day'>{dateString}({dayName})</span>
                <span className='task'><em>{incompleteItem.length}</em>개 남음</span>
            </div>
        </TodoHeaderBlock>
    )
}

export default TodoHeader;