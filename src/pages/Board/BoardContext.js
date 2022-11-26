import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialBoards = [
    {
        id: 10,
        title: '게시판 만들기 완성 ✌🏻',
        content: 'router 이용해서 링크 연결하고 게시판 만들었다~~~'
      },
      {
        id: 11,
        title: '리액트란 .. 몰까 .. ',
        content: '이해할만 하면 또 어렵고 할만하면 어렵고 ^^'
      },
      {
        id: 12,
        title: '시간이 안 가는 이번 주',
        content: '왜 아직도 목요일 왜 아직도 목요일 왜 아직도 목요일 왜 아직도 목요일'
      },
      {
        id: 13,
        title: '해야할 것 ✅',
        content: '게시판 작성, 게시판 수정, 게시판 삭제 등등.. <br/>아마도 갤러리랑 일반 목록 나누기랑 이미지도 나오게 해야되지 않을까<br/><br/><br/> 할거 너무 많다.. <br/>머리 아프구만 😇'
      },
      {
        id: 14,
        title: 'test5',
        content: 'test 중 test 중 test 중<br/>test 중 test 중 test 중 test 중 test 중 test 중 test 중 test 중 test 중 test 중 test 중 test 중 test 중'
      },
];
const BoardReducer = (state, action) => {
  let newState2 = [];
  switch (action.type) {
    case 'INIT': {
      return action.board;
    }
    case 'CREATE': {
      newState2 = [action.board, ...state];
      break;
    }
    case 'REMOVE': {
      // newState2 = state.filter((board) => board.id !== action.id);

      // newState2 = state.filter((id)=>{ return parseInt(action.id) !== id; });

      newState2 = state.filter((board) => board.id !== action.id);

      console.log(action)
      console.log(action.id)
      break;
    }
    // case 'EDIT': {
    //   newState2 = state.map(todo => todo.id === action.id ? { ...todo, text: action.text } : todo);
    //   // console.log(newState) 
    //   break;
    // }
    default:
      return state;
  }

  console.log("=======================")
  console.log("📌 localStorage 📌")
  localStorage.setItem('BoardItems', JSON.stringify(newState2));
  console.log(newState2)
  console.log("=======================")
  return newState2;
};

const BoardStateContext = createContext();
const BoardDispatchContext = createContext();
const BoardNextIdContext = createContext();

export function BoardProvider({ children }) {
  const [state, dispatch] = useReducer(BoardReducer, initialBoards);
  const nextId = useRef(0);

  return (
    <BoardStateContext.Provider value={state}>
      <BoardDispatchContext.Provider value={dispatch}>
        <BoardNextIdContext.Provider value={nextId}>
        {children}
        </BoardNextIdContext.Provider>
      </BoardDispatchContext.Provider>
    </BoardStateContext.Provider>
  );
}

export function useBoardState() {
  const context = useContext(BoardStateContext);
  if (!context) {
    throw new Error('Cannot find BoardProvider');
  }
  return context;
}

export function useBoardDispatch() {
  const context = useContext(BoardDispatchContext);
  if (!context) {
    throw new Error('Cannot find BoardProvider');
  }
  return context;
}

export function useBoardNextId() {
  const context = useContext(BoardNextIdContext);
  if (!context) {
    throw new Error('Cannot find BoardProvider');
  }
  return context;
}