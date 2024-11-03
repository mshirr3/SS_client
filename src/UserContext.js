/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/prop-types */
import { React, createContext, useState } from 'react'

export const UserContext = createContext({
  userInfo: null,
  setUserInfo: () => {}
})

export function UserContextProvider ({ children }) {
  const [userInfo, setUserInfo] = useState({})

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  )
}
