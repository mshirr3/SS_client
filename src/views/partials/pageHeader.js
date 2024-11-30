import { Link, useNavigate } from 'react-router-dom'
import { React, useContext, useEffect } from 'react'
import { UserContext } from '../../UserContext.js'

/**
 * Header func.
 *
 * @returns {HTMLHeadElement} .
 */
export default function Header () {
  const { setUserInfo, userInfo } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (window.localStorage.getItem('isLoggedIn') === 'true') {
      fetch('https://cscloud8-35.lnu.se/auth-service/api/v1/userInfo', {
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
  }, [userInfo, setUserInfo])

  /**
   * Logout func.
   *
   */
  function logout () {
    fetch('https://cscloud8-35.lnu.se/auth-service/api/v1/logout', {
      credentials: 'include',
      method: 'POST'
    })
    window.localStorage.setItem('isLoggedIn', false)
    setUserInfo(null)
    navigate('/roomsIndex')
  }

  const username = userInfo?.username
  return (
    <header>
      <Link to="/" className="logo">StayStrong</Link>
      <nav>
        {username && (
          <>
            <Link to="/roomsIndex">Rooms</Link>
            <a onClick={logout}>Logout  </a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up</Link>
            <Link to="/roomsIndex">Rooms</Link>
          </>
        )}
      </nav>
    </header>
  )
}
