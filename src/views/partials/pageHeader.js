import { Link } from 'react-router-dom'
import { React, useContext, useEffect } from 'react'
import { UserContext } from '../../UserContext.js'

/**
 * Header func.
 *
 * @returns {HTMLHeadElement} .
 */
export default function Header () {
  const { setUserInfo, userInfo } = useContext(UserContext)
  useEffect(() => {
    if (window.localStorage.getItem('isLoggedIn') === 'true') {
      fetch('http://localhost:3200/api/v1/userInfo', {
        credentials: 'include'
      }).then(response => {
        response.json().then(userInfo => {
          setUserInfo(userInfo)
        })
      }).catch(error => {
        console.error('Error fetching data: ', error)
        setUserInfo(null)
      })
    }
  }, [])

  /**
   * Logout func.
   *
   */
  function logout () {
    fetch('http://localhost:3200/api/v1/logout', {
      credentials: 'include',
      method: 'POST'
    })
    window.localStorage.setItem('isLoggedIn', false)
    setUserInfo(null)
  }

  const username = userInfo?.username
  return (
    <header>
      <Link to="/" className="logo">StayStrong</Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new room</Link>
            <a onClick={logout}>Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up</Link>
          </>
        )}
      </nav>
    </header>
  )
}
