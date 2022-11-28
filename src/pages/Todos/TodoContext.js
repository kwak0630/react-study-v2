import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = [
  {
    id: 0,
    text: '리액트 공부',
    done: false
  },
  {
    id: 1,
    text: '투두리스트 템플릿 작업',
    done: true
  },
  {
    id: 2,
    text: '목록, 등록, 수정, 삭제, 체크 작업',
    done: true
  },
  {
    id: 3,
    text: '미 완료 카운트 작업',
    done: true
  },
  {
    id: 4,
    text: '오늘 날짜 작업',
    done: true
  },
  {
    id: 5,
    text: '카테고리 탭 나누기',
    done: true
  },
  {
    id: 6,
    text: 'swiper 연습',
    done: true
  },
  {
    id: 7,
    text: 'router로 링크 이동, 페이지 id 값',
    done: true
  },
  {
    id: 8,
    text: '게시판 목록, 상세페이지 작업',
    done: true
  },
  {
    id: 9,
    text: '더보기(페이징) 목록',
    done: true
  },
  {
    id: 10,
    text: '뒤로가기 버튼 작업',
    done: true
  }
];

const todoReducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case 'INIT': {
      return action.todo;
    }
    case 'CREATE': {
      newState = [action.todo, ...state];
      break;
    }
    case 'REMOVE': {
      newState = state.filter((todo) => todo.id !== action.id);
      break;
    }
    case 'EDIT': {
      newState = state.map(todo => todo.id === action.id ? { ...todo, text: action.text } : todo);
      // console.log(newState) 
      break;
    }
    case 'CHECK':{
      newState = state.map(todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo);
      break;
    }
    default:
      return state;
  }

  localStorage.setItem('todos', JSON.stringify(newState));
  return newState;
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(11);

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