import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Todos from './pages/Todos';
import NotFound from './pages/NotFound';
import Users from './pages/Users';
import UserDetail from './pages/Users/UserDetail';
import Board from './pages/Board';
import BoardDetail from './pages/Board/BoardDetail';
import BoardCreate from './pages/Board/BoardCreate';

function App() {
  return (
    <div className='layout'>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Todos />}></Route>
          <Route path="/pages/Board" element={<Board />} />{/* </Route> */}
          {/* <Route path="/pages/Board/BoardDetail/:boardId" element={<BoardDetail />}></Route> */}
          <Route path="/pages/Board/BoardDetail/:id" element={<BoardDetail />}></Route>
          <Route path="/pages/Board/BoardCreate" element={<BoardCreate />}></Route>
          <Route path="/pages/Users" element={<Users />} />
          <Route path="/pages/Users/UserDetail/:id" element={<UserDetail />} />
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
