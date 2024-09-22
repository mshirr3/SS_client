import { Link } from 'react-router-dom'
import React from 'react'

/**
 * Function that returns html text for forums index page.
 *
 * @returns {HTMLBaseElement} html
 */
export default function ForumsIndex () {
  return (
        <div className="container" id="ForumsIndexContainer">
            <div className="main-body p-0">
                <div className="inner-wrapper">
                    <div className="inner-sidebar">
                        <div className="inner-sidebar-header justify-content-center">
                            <button className="btn btn-primary">Topics</button>
                        </div>

                        <div className="inner-siderbar-body p-0">
                            <div className="list-group">
                                <a href="." className="list-group-item list-group-item-action d-flex gap-3 py-3">
                                    <div className="d-flex gap-2 w-100 justify-content-between">
                                        <div>
                                            <h6 className="mb-0">EDS</h6>
                                            <p className="mb-0 opacity-75">
                                                The Ehlers-Danlos syndromes (EDS) are a group of 13 heritable connective tissue disorders.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="." className="list-group-item list-group-item-action d-flex gap-3 py-3">
                                    <div className="d-flex gap-2 w-100 justify-content-between">
                                        <div>
                                            <h6 className="mb-0">Sickle Cell</h6>
                                            <p className="mb-0 opacity-75">
                                                Sickle cell disease (SCD), also simply called sickle cell, is a group of hemoglobin-related blood disorders typically inherited.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="." className="list-group-item list-group-item-action d-flex gap-3 py-3">
                                    <div className="d-flex gap-2 w-100 justify-content-between">
                                        <div>
                                            <h6 className="mb-0">Haemophilia</h6>
                                            <p className="mb-0 opacity-75">
                                                Hemophilia is usually an inherited bleeding disorder in which the blood does not clot properly.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
  )
}
