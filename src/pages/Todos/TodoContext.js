import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = [
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
];

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'CHECK':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(0);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
        {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}