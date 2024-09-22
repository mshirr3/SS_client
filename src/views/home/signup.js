import { React, useState } from 'react'
/**
 * Function that returns html text for signup page.
 *
 * @returns {HTMLBaseElement} html
 */
export default function Signup () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  /**
   * Function that is called when user submits their info (onSubmit).
   *
   * @param {Event} ev the event
   */
  async function register (ev) {
    ev.preventDefault()
    await fetch(process.env.REACT_APP_API_URL, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-type': 'application/json' }
    })
  }
  return (
        <div className="offset-md-3 col-md-4">
            <form id="reg-form"
            // call register func when submitted
             onSubmit={register}>
                <div className="form-group">
                    <label htmlFor="">email</label>
                    <input type="text" name="email"
                    className="form-control" placeholder="email"
                    value={email}
                     // set the email value on change.
                     onChange={ev => setEmail(ev.target.value)}/>
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
