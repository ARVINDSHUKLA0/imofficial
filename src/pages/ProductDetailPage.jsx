import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'

const ProductDetailPage = () => {
    return (

        <>

            <div className='main-color pt-3 pb-5'>
                <Navbar />
            </div>


            {/* start  */}
            <section>
                <div className="container-fluid py-3 main-color">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                            <div className="row mx-2">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-1 p-1 ">
                                    <img src="/assets/img/product.png" className='img-fluid ' alt="" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-1 p-1">
                                    <img src="/assets/img/product.png" className='img-fluid' alt="" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-1 p-1">
                                    <img src="/assets/img/product.png" className='img-fluid' alt="" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-1 p-1">
                                    <img src="/assets/img/product.png" className='img-fluid' alt="" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-1 p-1">
                                    <img src="/assets/img/product.png" className='img-fluid' alt="" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-1 p-1">
                                    <img src="/assets/img/product.png" className='img-fluid' alt="" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-1 p-1">
                                    <img src="/assets/img/product.png" className='img-fluid' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 sm-size-padding ">
                            <div className='custam-width cutam-stkicky '>
                                <div>
                                    <h5 className='text-capitalize mb-3 product-heading'>(product35) sample - clothing and accessories boutiques for sale</h5>
                                    <div className='d-flex text-size'>
                                        <h5 className='px-2 text-clor-maroom'><i className="fa-solid fa-fire-flame-curved"></i></h5>
                                        <p className='text-clor-maroom font-size mb-3'>12 sold in last 15 hours</p>
                                    </div>
                                    <div>
                                        <p className='mb-2'>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. pellentesque diam dolor, elementum etos lobortis...</p>
                                        <p className='text-capitalize mb-2'>vendor : &nbsp;  collette</p>
                                        <p className='text-capitalize mb-2'>SKU :&nbsp;  W0690048</p>
                                        <p className='text-capitalize mb-2'>availability :&nbsp;  in stock</p>
                                        <p className='text-capitalize mb-2'>product type : &nbsp;  dincidunteros</p>
                                        <h5 className='mb-2'>$48.99</h5>
                                        <p className='text-clor-maroom mb-2'>Please hurry! Only 10 left in stock </p>
                                        <p className='text-capitalize'>color: darkorange</p>
                                        <div className='d-flex gap-3'>
                                            <div className='size-imges'>
                                                <img src="/assets/img/small-1.png" className='' alt="" />
                                            </div>
                                            <div className='size-imges'>
                                                <img src="/assets/img/small-1.png" className='' alt="" />
                                            </div>
                                            <div className='size-imges'>
                                                <img src="/assets/img/small-1.png" className='' alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-capitalize'>size: xs</p>
                                            <div className='d-flex gap-3'>
                                                 <div className='px-3 py-1 border border-dark'>
                                                     <h5 className='text-uppercase'>xs</h5>
                                                 </div>
                                                 <div className='px-3 py-1 size-border-color'>
                                                     <h5 className='text-uppercase'>s</h5>
                                                 </div>
                                                 <div className='px-3 py-1 size-border-color'>
                                                     <h5 className='text-uppercase'>m</h5>
                                                 </div>
                                                 <div className='px-3 py-1 size-border-color'>
                                                     <h5 className='text-uppercase'>l</h5>
                                                 </div>
                                            </div>
                                        </div>
                                        <div className='row align-items-center mt-3 mb-3'>
                                            <div className='col-lg-5 col-md-6 col-sm-6 col-12'>
                                            <button className='px-4 py-2 sm-size text-capitalize size-border-color bg-dark text-white btn-width'>add to cart</button>
                                            </div>
                                            <div className='col-lg-5 col-md-6 col-sm-6 col-12'>
                                            <button className='px-4 py-2 sm-size text-capitalize size-border-color bg-clor-maroom text-white btn-width'>buy now</button>
                                            </div>
                                        </div>
                                       
                                        
                                    </div>
                                </div>
                                <Link to="#" className='text-decoration-none text-muted '>
                                    <div className='d-flex mt-2'>
                                        <div className='new-custam-width-one custam-width-border'></div>
                                        <div className='new-custam-width-two custam-width-border  mx-2'></div>
                                        <div className='new-custam-width-three custam-width-border'></div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center py-4'>
                                        <p className='m-0'>Product details</p>
                                        <span>+</span>
                                    </div>
                                </Link>
                                <Link to="#" className='text-decoration-none text-muted'>
                                    <div className='d-flex'>
                                        <div className='new-custam-width-one custam-width-border'></div>
                                        <div className='new-custam-width-two custam-width-border  mx-2'></div>
                                        <div className='new-custam-width-three custam-width-border'></div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center py-4'>
                                        <p className='m-0 text-capitalize'>care & maintenance</p>
                                        <span>+</span>
                                    </div>
                                </Link>
                                <Link to="#" className='text-decoration-none text-muted'>
                                    <div className='d-flex'>
                                        <div className='new-custam-width-one custam-width-border'></div>
                                        <div className='new-custam-width-two custam-width-border  mx-2'></div>
                                        <div className='new-custam-width-three custam-width-border'></div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center py-4'>
                                        <p className='m-0 text-capitalize'>shipping information</p>
                                        <span>+</span>
                                    </div>
                                </Link>
                                <Link to="#" className='text-decoration-none text-muted'>
                                    <div className='d-flex'>
                                        <div className='new-custam-width-one custam-width-border'></div>
                                        <div className='new-custam-width-two custam-width-border  mx-2'></div>
                                        <div className='new-custam-width-three custam-width-border'></div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center py-4'>
                                        <p className='m-0 text-capitalize'>payment options & security</p>
                                        <span>+</span>
                                    </div>
                                </Link>
                                <Link to="#" className='text-decoration-none text-muted'>
                                    <div className='d-flex'>
                                        <div className='new-custam-width-one custam-width-border'></div>
                                        <div className='new-custam-width-two custam-width-border  mx-2'></div>
                                        <div className='new-custam-width-three custam-width-border'></div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center py-4'>
                                        <p className='m-0 text-capitalize'>return & exchange</p>
                                        <span>+</span>
                                    </div>
                                </Link>
                                <Link to="#" className='text-decoration-none text-muted'>
                                    <div className='d-flex'>
                                        <div className='new-custam-width-one custam-width-border'></div>
                                        <div className='new-custam-width-two custam-width-border  mx-2'></div>
                                        <div className='new-custam-width-three custam-width-border'></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 p-0 main-color">
                            <img src="/assets/img/product.png" className='img-fluid w-100 sm-set-images' alt="" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 owl-carousel">
                            <div className=' text-look-margin'>
                                <h4 className='text-center text-capitalize text-look my-4'>the look</h4>
                            </div>
                            <div className="row text-center position-relative">
                                <div className='owl-carousel-postion'>
                                    <p className='m-0 text-capitalize'>sumie sandal</p>
                                    <p className='m-0 text-capitalize text-clor-maroom'>rubber</p>
                                </div>
                                <div className="col-lg-6-col-md-6 col-sm-12 col-12 p-0">
                                    <img src=" /assets/img/product.png" className='img-fluid img-width m-0 sm-padding' alt="" />
                                </div>

                            </div>

                            <div className='text-center py-5'>
                                <button className='px-5 py-2 text-capitalize custam-border-maroom rounded-1'>view all looks</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='main-color py-5'>
                <div className='py-5'>
                    <h3 className='text-capitalize py-5 text-center text-recommendations'> our recommendations</h3>
                </div>
            </section>
            <section>
                <div className='text-center py-4 catgery-bg-color'>
                    <Link to="#" className='text-capitalize text-decoration-none text-dark'>woman &nbsp; /  </Link>
                    <Link to="#" className='text-capitalize text-decoration-none text-dark'> &nbsp; coats & capes  &nbsp;/</Link>
                    <span className='text-capitalize '> &nbsp;landry coat</span>

                </div>
            </section>

            {/* end  */}


        </>
    )
}

export default ProductDetailPage