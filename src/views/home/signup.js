import { React, useState } from 'react'
/**
 * Function that returns html text for signup page.
 *
 * @returns {HTMLBaseElement} html
 */
export default function Signup () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  /**
   * Function that is called when user submits their info (onSubmit).
   *
   * @param {Event} ev the event
   */
  async function register (ev) {
    ev.preventDefault()
    const apiUrl = `${process.env.REACT_APP_API_URL}/register`
    const res = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-type': 'application/json' }
    })
    if (res.ok) {
      alert('Registration successful')
    } else {
      alert('Registration failed')
    }
  }
  return (
        <div className="offset-md-3 col-md-4">
            <form id="reg-form"
            // call register func when submitted
             onSubmit={register}>
              <h1>Sign up</h1>
                <div className="form-group">
                    <label htmlFor="">username</label>
                    <input type="text" name="username"
                    className="form-control" placeholder="username"
                    value={username}
                     // set the email value on change.
                     onChange={ev => setUsername(ev.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="">password</label>
                    <input type="password" name="password"
                    className="form-control" placeholder="password"
                    value={password}
                     // set the password value on change.
                     onChange={ev => setPassword(ev.target.value)}/>
                </div>

                <button className="btn btn-primary">signup</button>

            </form>
        </div>
  )
}
