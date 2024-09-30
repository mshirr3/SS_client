import { React, useState } from 'react'

/**
 * Function that returns html text for login page.
 *
 * @returns {HTMLBaseElement} html
 */
export default function Login () {
  // use state to manage the form data.
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  /**
   * Function to log in.
   *
   * @param {Event} ev the event.
   */
  async function login (ev) {
    ev.preventDefault()
    await fetch(process.env.API_URL, {
      method: 'POST',
      body: JSON.stringify()
    })
  }

  return (
        <div className="offset-md-3 col-md-4">
            <form id="reg-form" onSubmit={login}>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="text" className="form-control"
                     placeholder="email" value={email}
                     // set the email value on change.
                     onChange={ev => setEmail(ev.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Password</label>
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
