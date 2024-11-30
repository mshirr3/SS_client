import { useState, React } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * For creating a room.
 *
 * @returns {HTMLElement} element.
 */
export default function CreateRoom () {
  const [pageName, setPageName] = useState('')
  const navigate = useNavigate()
  /**
   * Creates a new room.
   *
   * @param {event} ev the event.
   */
  async function createNewRoom (ev) {
    ev.preventDefault()
    const apiUrl = 'https://cscloud8-35.lnu.se/stay-strong-api/api/v1/rooms'
    const res = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify({ pageName }),
      headers: { 'Content-type': 'application/json' }
    })
    if (res.ok) {
      navigate('/roomsIndex')
    } else {
      alert('Try Again')
    }
  }

  return (
    <form onSubmit={createNewRoom}>
        <input type="title" placeholder={'Enter wikipedia title of disease'} value={pageName} onChange={ ev => setPageName(ev.target.value) }/>
        <button className="btn btn-primary"> create room</button>
    </form>
  )
}
