import { React, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserContext.js'

/**
 * Function that returns html text for login page.
 *
 * @returns {HTMLBaseElement} html
 */
export default function Login () {
  // use state to manage the form data.
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const { setUserInfo } = useContext(UserContext)
  const navigate = useNavigate()

  /**
   * Function to log in.
   *
   * @param {Event} ev the event.
   */
  async function login (ev) {
    ev.preventDefault()
    const apiUrl = `${process.env.REACT_APP_API_URL}/login`
    const res = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-type': 'application/json' },
      credentials: 'include' // if cookie present it would be included in browser requests
    })

    if (res.ok) {
      res.json().then(userInfo => {
        setUserInfo(userInfo)
        window.localStorage.setItem('isLoggedIn', true)
        setRedirect(true)
      })
    } else {
      alert('Wrong credentials')
    }

    if (redirect) {
      navigate('/forumsIndex')
    }
  }

  return (
        <div className="offset-md-3 col-md-4">
            <h1>Login</h1>
            <form id="reg-form" onSubmit={login}>
                <div className="form-group">
                    <label htmlFor="">username</label>
                    <input type="text" className="form-control"
                     placeholder="username" value={username}
                     // set the email value on change.
                     onChange={ev => setUsername(ev.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="">password</label>
                    <input type="text" name="password"
                    className="form-control" placeholder="password"
                    value={password}
                     // set the password value on change.
                     onChange={ev => setPassword(ev.target.value)}/>
                </div>

                <button className="btn btn-primary">log in</button>

            </form>
        </div>
  )
}
