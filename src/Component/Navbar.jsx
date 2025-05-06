import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {
    let navigation=useNavigate()
    function logout(){
        localStorage.removeItem("name")
        localStorage.removeItem("login")
        localStorage.removeItem("role")
        localStorage.removeItem("userid")
        navigation("/login")

    }
    return (
        <>
            <div className='top-bar p-2'>
                <div className='row'>
                    <div className='col-md-9 col-6'>
                        <div className='ms-5'>
                            <Link className='me-4' target='_blank' rel="noreferrer" to={`mailto:${process.env.REACT_APP_EMAIL}`}><i className='text-light fa fa-envelope'><span className='d-none d-md-inline'>{process.env.REACT_APP_EMAIL}</span></i></Link>
                            <Link className='me-4' target='_blank' rel="noreferrer" to={`mailto:${process.env.REACT_APP_PHONE}`}><i className='text-light fa fa-phone'><span className='d-none d-md-inline'>{process.env.REACT_APP_PHONE}</span></i></Link>
                            <Link className='me-4' target='_blank' rel="noreferrer" to={`https://wa.me/${process.env.REACT_APP_WHATSAPP}`}><i className='text-light fa fa-whatsapp'><span className='d-none d-md-inline'>{process.env.REACT_APP_WHATSAPP}</span></i></Link>
                        </div>
                    </div>
                    <div className='col-md-3 col-6'>
                        <div className='float-end me-5'>
                            <Link className='me-3' to={`${process.env.REACT_APP_FACEBOOK}`} target='_blank' rel='noreferrer'><i className='text-light bi bi-facebook'></i></Link>
                            <Link className='me-3' to={`${process.env.REACT_APP_INSTAGRAM}`} target='_blank' rel='noreferrer'><i className='text-light bi bi-instagram'></i></Link>
                            <Link className='me-3' to={`${process.env.REACT_APP_LINKEDIN}`} target='_blank' rel='noreferrer'><i className='text-light bi bi-linkedin'></i></Link>
                            <Link className='me-3' to={`${process.env.REACT_APP_TWITTER}`} target='_blank' rel='noreferrer'><i className='text-light bi bi-twitter-x'></i></Link>
                            <Link className='me-3' to={`${process.env.REACT_APP_YOUTUBE}`} target='_blank' rel='noreferrer'><i className='text-light bi bi-youtube'></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <header id="header" className="header d-flex align-items-center sticky-top ">
                <div className="container-fluid container-xl position-relative d-flex align-items-center">

                    <Link to="/" className="logo d-flex align-items-center me-auto">


                        <h1 className="sitename">{process.env.REACT_APP_SITE_NAME}</h1>
                    </Link>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><NavLink to="/">Home<br /></NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/shop">Shop</NavLink></li>
                            <li><NavLink to="/features">Features</NavLink></li>
                            <li><NavLink to="/testimonials">Testimonial</NavLink></li>
                            <li><NavLink to="/contactus">ContactUs</NavLink></li>
                            <li><NavLink to="/admin">Admin</NavLink></li>

                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>

                    <a className="btn-getstarted flex-md-shrink-0" href="index.html#about">Get Started</a>

                </div>
            </header> */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
                <div className="container">
                    <Link className="navbar-brand fs-3" to="/"><b>{process.env.REACT_APP_SITE_NAME}</b></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/shop">Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/features">Features</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/testimonial">Testimonial</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contactus">ContactUs</NavLink></li>
                           
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                           {
                            localStorage.getItem("login")?
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {localStorage.getItem("name")}
                            </a>
                            <ul className="dropdown-menu">
                                {
                                    localStorage.getItem("role") === "Buyer" ?
                                        <>
                                            <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                            <li><Link className="dropdown-item" to="/cart">Cart</Link></li>
                                            <li><Link className="dropdown-item" to="/checkout">Checkout</Link></li>
                                        </> :
                                        <li><Link className="dropdown-item" to="/admin">Profile</Link></li>
                                }
                                <li><hr className="dropdown-divider" /></li>
                                <li><button className="dropdown-item"onClick={logout}>Logout</button></li>
                            </ul>
                        </li>:
                         <li className="nav-item">
                                <Link className="btn text-light l"style={{ background: "#112240"}} to="/login">Login</Link></li>
                           }
                        </ul>
                    </div>
                </div>
         </nav>
        </>
    )
}
