import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialGallerys = [
    {
        id: 0,
        title: '갤러리 게시판',
        content: '갤러리 게시판 만드는 중 .. .',
        imgSrc: require('../../assets/images/gallery/sally.jpg')
      },
      {
        id: 1,
        title: 'error img',
        content: '이해할만 하면 또 어렵고 할만하면 어렵고 ^^',
        imgSrc: ''
      },
      {
        id: 2,
        title: '내 사랑 망고 🐶🍋',
        content: '망고 널 사랑해,, i love you .. 💛',
        imgSrc: require('../../assets/images/gallery/mango.jpg')
      },
];
const GalleryReducer = (state, action) => {
  let newState2 = [];
  switch (action.type) {
    case 'INIT': {
      return action.Gallery;
    }
    case 'CREATE': {
      newState2 = [action.Gallery, ...state];
      break;
    }
    case 'REMOVE': {
      newState2 = state.filter((Gallery) => Gallery.id !== action.id);
      break;
    }
    default:
      return state;
  }

  console.log("=======================")
  console.log("📌 localStorage 📌")
  localStorage.setItem('GalleryItems', JSON.stringify(newState2));
  console.log(newState2)
  console.log("=======================")
  return newState2;
};

const GalleryStateContext = createContext();
const GalleryDispatchContext = createContext();
const GalleryNextIdContext = createContext();

export function GalleryProvider({ children }) {
  const [state, dispatch] = useReducer(GalleryReducer, initialGallerys);
  const nextId = useRef(0);

  return (
    <GalleryStateContext.Provider value={state}>
      <GalleryDispatchContext.Provider value={dispatch}>
        <GalleryNextIdContext.Provider value={nextId}>
        {children}
        </GalleryNextIdContext.Provider>
      </GalleryDispatchContext.Provider>
    </GalleryStateContext.Provider>
  );
}

export function useGalleryState() {
  const context = useContext(GalleryStateContext);
  if (!context) {
    throw new Error('Cannot find GalleryProvider');
  }
  return context;
}

export function useGalleryDispatch() {
  const context = useContext(GalleryDispatchContext);
  if (!context) {
    throw new Error('Cannot find GalleryProvider');
  }
  return context;
}

export function useGalleryNextId() {
  const context = useContext(GalleryNextIdContext);
  if (!context) {
    throw new Error('Cannot find GalleryProvider');
  }
  return context;
}