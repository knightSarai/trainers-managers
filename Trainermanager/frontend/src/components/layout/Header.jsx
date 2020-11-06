import React from 'react'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-info bg-info">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="#" style={{color: "#f4f4f4"}}>Trainer Manager</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                </ul>
            </div>
        </nav>
    )
}
