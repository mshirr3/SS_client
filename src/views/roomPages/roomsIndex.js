import { Link } from 'react-router-dom'
import { useState, React, useContext, useEffect } from 'react'
import { UserContext } from '../../UserContext.js'

/**
 * Function that returns html text for rooms index page.
 *
 * @returns {HTMLBaseElement} html
 */
export default function RoomsIndex () {
  const [rooms, setRooms] = useState([])
  const { userInfo } = useContext(UserContext)
  const apiUrl = 'https://cscloud8-35.lnu.se/stay-strong-api/api/v1/rooms'

  useEffect(() => {
    getRooms()
  }, [])

  /**
   * To get the rooms.
   *
   */
  async function getRooms () {
    const res = await fetch(apiUrl, {
      method: 'GET',
      headers: { 'Content-type': 'application/json' }
    })
    if (res.ok) {
      const data = await res.json()
      setRooms(data)
    }
  }

  const username = userInfo?.username

  return (
        <div className="container" id="ForumsIndexContainer">
            <div className="main-body p-0">
                <div className="inner-wrapper">
                    <div className="inner-sidebar">
                        <div className="inner-sidebar-header justify-content-center">
                            <a className="btn btn-primary">Rooms</a>
                        </div>

                        <div className="inner-sidebar-header justify-content-center">
                            { username && (
                                <>
                                <Link to="/createRoom" className="btn btn-primary">Create New Room</Link>
                              </>
                            )}
                        </div>

                        <div className="inner-siderbar-body p-0">
                            <div className="list-group">
                            {
  rooms && rooms.length > 0
    ? (
        rooms.map(room => (
    <Link
      key={room._id} // Add a unique key for React
      to={`/room/${room._id}`} // Dynamic route for the room
      className="list-group-item list-group-item-action d-flex gap-3 py-3"
    >
      <div className="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 className="mb-0">{room.title}</h6>
          <p className="mb-0 opacity-75">{room.firstSentence}</p>
        </div>
      </div>
    </Link>
        )))
    : (
    <p>No rooms available.</p>
      )
}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
  )
}
