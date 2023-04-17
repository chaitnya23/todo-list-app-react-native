import React, { createContext, useState } from 'react'

export const AppContext = createContext();

export default function ListContext({children}) {

    const [myTodos, setmyTodos] = useState([]);
    const [doneTodos, setdoneTodos] = useState([]);

  return (
    <AppContext.Provider value={{myTodos ,setmyTodos ,doneTodos ,setdoneTodos}}>
    {children}
    </AppContext.Provider>
  )
}
