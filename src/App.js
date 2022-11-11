import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Todos from './pages/Todos/index';
// import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Users from './pages/Users';
import UserDetail from './pages/Users/UserDetail';

function App() {
  return (
    <div className='layout'>
      <BrowserRouter>
      {/* <Todos></Todos> */}
      <Routes>
        <Route path="/" element={<Todos />}></Route>
        <Route path="/pages/Users" element={<Users />}>
        </Route>
          <Route path="/pages/Users/UserDetail/:id" element={<UserDetail />} />
        {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
