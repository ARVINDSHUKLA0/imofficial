import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [sidebarActive, setSidebarActive] = useState(false)
  return (
    <>
    <nav>
                <div className="d-flex justify-content-between navbar px-4 ">
                    <div className="">
                        <Link to="/">
                        <img className="w-25" src="/assets/img/logo.png" alt="" />
                        </Link> 
                    </div>
                    <div>
                        <ul className="d-flex p-0 m-0 gap-3">
                            <li>
                                <a href="#">
                                    <i className="fa-regular fa-heart text-white "> </i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-solid fa-cart-shopping text-white "></i>
                                </a>
                            </li>
                            <li>
                                <span onClick={() => { setSidebarActive(true) }}>
                                    <i className="fa-solid fa-bars a-white text-white"></i>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <aside className={` sidebar-wrapper ${sidebarActive ? "sidebar-active" : ""}`}>
                <div className="close-sidebar-box" onClick={() => { setSidebarActive(false) }}></div>
                <div className='sidebar-item-box'>
                    <div>
                        <ul className="d-flex justify-content-end  gap-4 sidebar-ul ">
                            <li>
                                <a className="text-dark " href="#"><i className="fa-regular fa-heart"></i></a>
                            </li>
                            <li>
                                <a className="text-dark" href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                            </li>
                            <li onClick={() => { setSidebarActive(!sidebarActive) }}>
                                <a className="text-dark" href="#"><i className="fa-solid fa-bars"></i></a>
                            </li>
                        </ul>

                    </div>
                    <div className="sidebar-margin-top">
                        <ul className="m-0">
                            <li className="mt-4">
                                <a className="text-uppercase text-decoration-none text-dark sidebar-text" href="#">home</a>
                            </li>
                            <li className="mt-4">
                                <a className="text-uppercase text-decoration-none text-dark sidebar-text" href="#">lisfestyle</a>
                            </li>
                            <li className="mt-4">
                                <a className="text-uppercase text-decoration-none text-dark sidebar-text" href="#">accessories</a>
                            </li>
                            <li className="mt-4">
                                <a className="text-uppercase text-decoration-none text-dark sidebar-text" href="#">customization</a>
                            </li>
                            <li className="mt-4">
                                <a className="text-uppercase text-decoration-none text-dark sidebar-text" href="#">about us</a>
                            </li>
                            <li className="mt-4">
                                <a className="text-uppercase text-decoration-none text-dark sidebar-text" href="#">contact us</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </aside> 
    </>
  )
}

export default Navbar