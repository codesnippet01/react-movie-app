import React, { Component } from 'react'
import './Header.css'
export class Header extends Component {
    render() {
        return (
            <div className="rmdb-header">
           
           <div className="rmdb-header-content">
               <img src="./images/reactMovie_logo.png" alt="logo" className="rmdb-logo"/>
               <img src="./images/tmdb_logo.png" alt="tmdb-logo" className="rmdb-tmdb-logo"/>
           </div>
            </div>
        )
    }
}

export default Header
