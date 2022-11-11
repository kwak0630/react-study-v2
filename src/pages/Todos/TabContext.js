import React, { useReducer, createContext, useContext } from 'react';

const initialCategories = [
  { 
    id: 'all', 
    active: true 
  },
  { 
    id: 'complete', 
    active: false 
  },
  { 
    id: 'incomplete', 
    active: false 
  },
];

function categoryReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return state.map(category =>
        category.id === action.id ? { ...category, active: true } : { ...category, active: false}
      );
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const CategoryStateContext = createContext();
const CategoryDispatchContext = createContext();

export function CategoryProvider({ children }) {
  const [state, dispatch] = useReducer(categoryReducer, initialCategories);

  return (
    <CategoryStateContext.Provider value={state}>
      <CategoryDispatchContext.Provider value={dispatch}>
        {children}
      </CategoryDispatchContext.Provider>
    </CategoryStateContext.Provider>
  );
}

export function useCategoryState() {
  const context = useContext(CategoryStateContext);
  if (!context) {
    throw new Error('Cannot find CategoryProvider');
  }
  return context;
}

export function useCategoryDispatch() {
  const context = useContext(CategoryDispatchContext);
  if (!context) {
    throw new Error('Cannot find CategoryProvider');
  }
  return context;
}
