import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './views/layouts/default.js'
import HomePageMain from './views/home/index.js'
import Signup from './views/home/signup.js'
import Login from './views/home/login.js'
import ForumsIndex from './views/forumPages/forumsIndex.js'

/**
 * Main app function.
 *
 * @returns {Routes} routes.
 */
function App () {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={
        <HomePageMain />
      } />
      <Route path={'/signup'} element={
        <Signup />
      } />
      <Route path={'/forumsIndex'} element={
        <ForumsIndex />
      } />
      <Route path={'/login'} element={
        <Login />
      } />
      </Route>
    </Routes>

  )
}

export default App
