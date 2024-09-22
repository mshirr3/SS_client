import HeaderContainer from '../partials/pageHeader'
import { Outlet } from 'react-router-dom'
import React from 'react'

/**
 * Function that returns html text for default page.
 *
 * @returns {HTMLBaseElement} html
 */
export default function Layout () {
  return (
        <div className="main">
          <HeaderContainer />
          <Outlet />
        </div>
  )
}
