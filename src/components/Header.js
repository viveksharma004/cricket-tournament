import React from 'react'
import ball from "../images/ball.png"
const Header = () => {
  return (
    <>
    <header className="large-screens" id="y">
    <div className="container">
        <nav className="navbar navbar-expand-lg p-0">
            <div className=" navbar-collapse" id="mynavbar">
                <div className="col-lg-8">
                    <div className="left-nav">
                        <a href="index.html" className="navbar-brand m-0 p-0"><img alt="" src={ball} width={80}/></a>
                        <ul className="navbar-nav m-0">
                            <li className="menu-item"><a href="index.html" className="active">Home</a></li>
                            <li className="menu-item"><a href="./about.html">ABOUT US</a></li>
                            <li className="has-children">
                                <a href="#y">Pages</a>
                                <ul className="submenu">
                                    <li><a href="#y">blog</a></li>
                                    <li><a href="blog-detail.html">blog
                                            detail </a></li>
                                    <li><a href="#gallery">Gallery</a></li>
                                    <li><a href="team.html">Team
                                        </a></li>
                                    <li><a href="player-detail.html">Player
                                            Detail</a></li>
                                    <li><a href="match-result.html">Match
                                            Result</a></li>
                                    <li><a href="match-schedule.html">Match
                                            Schedule</a></li>
                                    <li><a href="faq.html">FAQ's</a></li>
                                </ul>
                            </li>
                            <li className="menu-item"><a href="match-schedule.html">TOURNAMENTS</a></li>
                            <li className="menu-item"><a href="contact.html">CONTACT US</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2">
                    <form action="index.html" className="input-group search-bar">
                        <input type="text" placeholder="Search..." required=""/>
                        <button className="search" type="submit"><i className="far fa-search search-icon"></i></button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</header>
<header className="small-screen">
    <div className="container-fluid">
        <div className="mobile-menu">
            <div>
                <a className="navbar-brand" href="index.html"><img alt="" src={ball} width={70}/></a>
            </div>
            <div className="hamburger-menu">
                <div className="bar"></div>
            </div>
        </div>
        <nav className="mobile-navar d-xl-none">
            <ul>
                <li><a href="index.html" className="active">Home</a></li>
                <li><a href="about.html">ABOUT US</a></li>
                <li className="has-children">Pages <span className="icon-arrow"></span>
                    <ul className="children">
                        <li><a href="blog.html">blog</a></li>
                        <li><a href="blog-detail.html">blog detail
                            </a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="team.html">Team </a></li>
                        <li><a href="player-detail.html">Player
                                Detail</a></li>
                        <li><a href="match-result.html">Match Result</a></li>
                        <li><a href="match-schedule.html">Match
                                Schedule</a></li>
                        <li><a href="faq.html">FAQ's</a></li>
                    </ul>
                </li>
                <li><a href="match-schedule.html">TOURNAMENTS</a></li>
                <li><a href="contact.html">CONTACT US</a></li>
            </ul>
        </nav>
    </div>
</header>
    </>
  )
}

export default Header