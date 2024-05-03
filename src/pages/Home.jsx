import { useState } from "react"

const Home = () => {
    const [sidebarActive, setSidebarActive] = useState(false)

    return (
        <>
            <nav>
                <div className="d-flex justify-content-between navbar px-4 ">
                    <div className="">
                        <img className="w-25" src="/assets/img/logo.png" alt="" />
                    </div>
                    <div>
                        <ul className="d-flex p-0 m-0 gap-3">
                            <li>
                                <a href="#">
                                    <i className="fa-regular fa-heart text-white"> </i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-solid fa-cart-shopping text-white"></i>
                                </a>
                            </li>
                            <li>
                                <span onClick={() => { setSidebarActive(true) }}>
                                    <i className="fa-solid fa-bars text-white"></i>
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
                                <a className="text-dark" href="#"><i className="fa-regular fa-heart"></i></a>
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
            {/* <aside className="sidebar-container">
                <div className={` sidebar-wrapper ${sidebarActive ? "sidebar-active" : ""}`}>
                    <div>
                        <ul className="d-flex justify-content-end  gap-4 sidebar-ul ">
                            <li>
                                <a className="text-dark" href="#"><i className="fa-regular fa-heart"></i></a>
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
            </aside> */}

            <section className="banner-wrapper ">
                <div>
                    <div>
                        <div className="banner-center-logo">
                            <img src="/assets/img/banner-center-logo.png" alt="" />
                        </div>
                        <div className="banner-center-text">
                            <h1 className="text-white imofficial-text">imofficial</h1>
                            <p className="text-white text-uppercase paragraph-grace">inspired by grace</p>
                        </div>
                    </div>
                    <div>
                        <img src="//assets/img/banner.jpeg" alt="banner " className="w-100 banner-img" />
                    </div>
                </div>

            </section>

            <section className=" banner-two position-relative">
                <div className="banner-opctiy"></div>
                <div className="aristocratice-text">
                    <h2 className="text-white text-uppercase imofficial-text aristocratice-sm">aristocratice</h2>
                    <p className="text-white aristocratice-paragraph">Aristocratice empowers you to express your regal spirt without sacrificing comfort Don the crown <br /> not literally, but with the effortless confidence that come form knowing you're impeccably dressed</p>
                </div>
                <div>
                    <img src="//assets/img/banner-2.jpeg" alt="banner-2" className="banner-2-img " />

                </div>
            </section>

            <section className="custom-background-color">
                <div className="main-conatiner">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 gap-3 pt-2 p-1">
                            <div className="custom-border-right ">
                                <img src="assets/img/t-shirt-black.jpeg" alt="" className="img-fluid width-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 gap-3 custom-margin pt-2 p-1">
                            <div className="custom-border-left position-relative">
                                <img src="assets/img/car-1.jpeg" alt="" className="img-fluid width-img" />
                                <div className="images-inner-border">
                                    <div className="images-inner-text">
                                        <h4 className="text-white text-uppercase sm-size-text">achi30 aston martion</h4>
                                        <h4 className="text-white text-uppercase sm-size-text">edition color</h4>
                                        <button className="text-white text-uppercase border-0 custom-shape-btn">shop now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="custom-background-color">
                <div className="main-conatiner">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 gap-3 custom-margin pt-2 p-1">
                            <div className="custom-border-left position-relative">
                                <img src="/assets/img/car-2.jpeg" alt="" className="img-fluid width-img" />
                                <div className="images-inner-border">
                                    <div className="images-inner-text">
                                        <h4 className="text-white text-uppercase sm-size-text">achi30 aston martion</h4>
                                        <h4 className="text-white text-uppercase sm-size-text">edition color</h4>
                                        <button className="text-white text-uppercase border-0 custom-shape-btn">shop now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 gap-3 pt-2 p-1">
                            <div className="custom-border-right">
                                <img src="/assets/img/t-shart-brown.jpeg" alt="" className="img-fluid width-img" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="custom-background-color">
                <div className="main-conatiner">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 gap-3 pt-2 p-1">
                            <div className="custom-border-right">
                                <img src="/assets/img/t-shart-white.jpeg" alt="" className="img-fluid width-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 gap-3 custom-margin pt-2 p-1">
                            <div className="custom-border-left position-relative">
                                <img src="/assets/img/horse.jpeg" alt="" className="img-fluid width-img" />
                                <div className="images-inner-border">
                                    <div className="images-inner-text">
                                        <h4 className="text-white text-uppercase sm-size-text">achi30 aston martion</h4>
                                        <h4 className="text-white text-uppercase sm-size-text">edition color</h4>
                                        <button className="text-white text-uppercase border-0 custom-shape-btn">shop now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="custom-background-color">
                <div className="main-conatiner">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 gap-3 custom-margin pt-2 p-1">
                            <div className="custom-border-left position-relative">
                                <img src="/assets/img/diamond.jpeg" alt="" className="img-fluid width-img" />
                                <div className="images-inner-border">
                                    <div className="images-inner-text">
                                        <h4 className="text-white text-uppercase sm-size-text">achi30 aston martion</h4>
                                        <h4 className="text-white text-uppercase sm-size-text">edition color</h4>
                                        <button className="text-white text-uppercase border-0 custom-shape-btn">shop now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 gap-3 pt-2 p-1">
                            <div className="custom-border-right">
                                <img src="/assets/img/t-shart-blue.jpeg" alt="" className="img-fluid width-img" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="custom-background-color">
                <div className="main-conatiner">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 gap-3 pt-2 p-1">
                            <div className="custom-border-right">
                                <img src="/assets/img/t-shart-blue.jpeg" alt="" className="img-fluid width-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 gap-3 custom-margin pt-2 p-1">
                            <div className="custom-border-left position-relative">
                                <img src="/assets/img/watches.jpeg" alt="" className="img-fluid width-img" />
                                <div className="images-inner-border">
                                    <div className="images-inner-text">
                                        <h4 className="text-white text-uppercase sm-size-text">achi30 aston martion</h4>
                                        <h4 className="text-white text-uppercase sm-size-text">edition color</h4>
                                        <button className="text-white text-uppercase border-0 custom-shape-btn">shop now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="main-viedo">
                    <video autoPlay muted loop src="/assets/img/viedo.mp4"></video>
                </div>
            </section>

            <section className="custom-background-color pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12-col-md-12-col-sm-12 col-12">
                            <p className="text-uppercase text-white pt-3 m-0 p-0"> read update</p>
                            <h2 className="text-uppercase  pb-3 blogs-color ">blogs</h2>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div>
                                <img src="public\assets\img\blogs-1.png" alt="" className="w-100" />
                            </div>
                            <div className="">
                                <p className="text-white blogs-centent pt-4 ">Welcome to the world of imofficial clothing where tradition meets modemity and scphistication </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div>
                                <img src="public\assets\img\blogs-2.png" alt="" className="w-100    " />
                            </div>
                            <div>
                                <p className="text-white blogs-centent pt-4">knows no bounds, with IMMOFFCIAL, every stitch tells a story of opulence and refinement destined to</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div>
                                <img src="public\assets\img\blogs-3.png" alt="" className="w-100" />
                            </div>
                            <div>
                                <p className="text-white blogs-centent pt-4">transcend trends and become an enduring symbol of enduring style. jion us as we redefine lxury</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="custom-background-color-danger py-5 custom-border">
                <div className="container">
                    <div className="">
                        <div className="row align-items-center ">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-2">
                                <p className="text-uppercase text-white blogs-centent m-0">jion our communty</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12 m-0 mt-2 ">
                                <h2 className="text-uppercase text-white blogs-color m-0">newsletter</h2>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12 col-12 mt-4">
                                <div className="w-100 d-flex align-items-center border border-1 rounded-5 ps-2">
                                    <input type="text" className="border-0 form-control flex-grow-1 ps-1 bg-transparent text-white newsletter-form " />
                                    <button className="px-5 border-0 text-uppercase py-2 rounded-5 btn-color">submit</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <footer className="custom-background-color pt-5 pb-4">
                <div className="container">
                    <div className="d-flex  justify-content-between">
                        <div>
                            <ul className=" p-0">
                                <li className="line-hight">
                                    <a className="text-white text-uppercase footer-text" href="#">home</a>
                                </li>
                                <li className="line-hight">
                                    <a className="text-white text-uppercase footer-text" href="#">lifestyle</a>
                                </li>
                                <li className="line-hight">
                                    <a className="text-white text-uppercase footer-text" href="#">accessories</a>
                                </li>
                                <li className="line-hight">
                                    <a className="text-white text-uppercase footer-text" href="#">customization</a>
                                </li>
                                <li className="line-hight">
                                    <a className="text-white text-uppercase footer-text" href="#">abot us</a>
                                </li>
                                <li className="line-hight">
                                    <a className="text-white text-uppercase footer-text" href="#">contact us</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <a className="text-white fs-5" href="#"><i className="fa-brands fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a className="text-white fs-5" href="#"><i className="fa-brands fa-square-facebook"></i></a>
                                </li>
                                <li>
                                    <a className="text-white fs-5" href="#"><i className="fa-brands fa-linkedin"></i></a>
                                </li>
                                <li>
                                    <a className="text-white fs-5" href="#"><i className="fa-brands fa-pinterest"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Home