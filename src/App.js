import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './views/layouts/default.js'
import HomePageMain from './views/home/index.js'
import Signup from './views/home/signup.js'
import Login from './views/home/login.js'
import RoomsIndex from './views/roomPages/roomsIndex.js'
import Room from './views/roomPages/Room.js'
import { UserContextProvider } from './UserContext.js'
import CreateRoom from './views/roomPages/createRoom.js'

/**
 * Main app function.
 *
 * @returns {Routes} routes.
 */
function App () {
  return (
    <UserContextProvider>
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={
        <HomePageMain />
      } />
      <Route path={'/signup'} element={
        <Signup />
      } />
      <Route path={'/roomsIndex'} element={
        <RoomsIndex />
      } />
      <Route path={'/login'} element={
        <Login />
      } />
      <Route path={'/createRoom'} element={<CreateRoom />} />
      <Route path={'/room/:id'} element={<Room />} />
      </Route>
    </Routes>
    </UserContextProvider>
  )
}

export default App
