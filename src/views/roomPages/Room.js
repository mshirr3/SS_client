import { useParams } from 'react-router-dom'
import { React, useState, useContext, useEffect } from 'react'
import { UserContext } from '../../UserContext.js'

/**
 * Returns the room layout.
 *
 * @returns {HTMLElement} html.
 */
export default function Room () {
  const [roomData, setRoomData] = useState(null)
  const { userInfo } = useContext(UserContext)
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')
  const { id } = useParams() // Get id from URL params

  /**
   * To fetch data.
   */
  const fetchRoomData = async () => {
    try {
      const response = await fetch(`https://cscloud8-35.lnu.se/stay-strong-api/api/v1/rooms/${id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch room data')
      }
      const roomData = await response.json()
      setRoomData(roomData)
      setThoughts(roomData.room.comments || [])
    } catch (error) {
      console.error('Error fetching room data:', error)
    }
  }

  useEffect(() => {
    fetchRoomData()
  }, [])

  /**
   * For submitting thought.
   *
   * @param {event} ev ev.
   */
  async function submitThought (ev) {
    ev.preventDefault()
    const apiUrl = `https://cscloud8-35.lnu.se/stay-strong-api/api/v1/rooms/${id}/thoughts`
    const res = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify({
        username: userInfo.username,
        text: newThought
      }),
      headers: { 'Content-type': 'application/json' }
    })
    if (res.ok) {
      setNewThought('')
      fetchRoomData()
    }
  }
  return (
    <div>
    {roomData
      ? (
      <>
        <h2 style={{ color: 'darkblue', marginLeft: '10px' }}>{roomData.room.title}</h2>
        <p style={{ lineHeight: '1.5', marginLeft: '20px' }}>{roomData.room.textContent}</p>

        <section id="thoughts" style={{ borderTop: '1px solid #ddd', paddingTop: '20px' }}>
          <h3 style={{ fontSize: '1.2em', color: 'black', marginLeft: '10px', fontWeight: 'bold' }}>Thoughts</h3>
          {thoughts.length > 0
            ? (
                thoughts.map((thought) => (
      <div key={thought._id} className="thought"
      style={{
        background: '#f9f9f9',
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '5px'
      }}
      >
        <strong>{thought.username}</strong>
        <p style={{ margin: '5px 0' }}>{thought.text}</p>
      </div>
                )))
            : (
    <p style={{ color: '#999', marginLeft: '20px' }}>No thoughts yet. Be the first to share one!</p>
              )}

          { userInfo.username
            ? (<form onSubmit={submitThought}
           style={{ marginTop: '20px', display: 'flex', flexDirection: 'column' }}
          >
            <label htmlFor="new-thought" style={{ marginLeft: '10px' }}>Add a thought:</label>
            <textarea
              id="new-thought"
              value={newThought}
              onChange={(e) => setNewThought(e.target.value)}
              required
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ddd',
                marginBottom: '10px',
                resize: 'none',
                width: '300px',
                marginLeft: '20px'
              }}
            />
            <button type="submit"
            style={{
              width: '120px', // Set desired width
              padding: '5px',
              backgroundColor: ' #34495e', // Optional: Customize color
              color: ' #fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginLeft: '20px'
            }}
            >Submit</button>
          </form>)
            : (
            <p style={{ color: '#999', marginLeft: '20px' }}>Log in to share a thought!</p>
              )
        }
        </section>
      </>
        )
      : (
      <p>Loading...</p>
        )}
  </div>
  )
}
