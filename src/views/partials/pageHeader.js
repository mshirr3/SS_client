import { Link } from 'react-router-dom'
import React from 'react'

/**
 * Function that returns the header container.
 *
 * @returns {HTMLElement} container div
 */
export default function HeaderContainer () {
  return (
        <div className="container">
            <header className="border-bottom lh-1 py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-1 pt-1">
                        <Link to="/signup" class="link-secondary">Sign up</Link>
                    </div>
                    <div className="col-1 pt-1">
                        <Link to="/forumsIndex">Rooms</Link>
                    </div>
                    <div className="col-4 text-center">
                        <h2>
                            <Link class="blog-header-logo text-body-emphasis text-decoration-none" to=".">
                                StayStrong
                            </Link>
                        </h2>
                    </div>

                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <Link to="/login" class="btn btn-sm btn-outline-secondary">Log in</Link>
                    </div>
                </div>
            </header>
        </div>
  )
}
