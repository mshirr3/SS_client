import React from 'react'

/**
 * Function that returns html text for start page.
 *
 * @returns {HTMLBaseElement} html
 */
export default function HomePageMain () {
  return (
        <main className="container">
          <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
            <div className="col-lg-6 px-0">
              <h2 className="display-4 fst-italic">WELCOME TO OUR COMMUNITY</h2>
              <p className="lead my-3">
                StayStrong is a community where people gather to connect and share experiences of different illnesses, diagnosed or not. This is a place where you are always reminded that you are not alone in whatever you are going through, so StayStrong.
              </p>
            </div>
          </div>
        </main>
  )
}
