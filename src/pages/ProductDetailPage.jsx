import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'

const ProductDetailPage = () => {
    return (

        <>

            <div className='bg-dark py-5'>
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
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className=' d-flex justify-content-between align-items-center py-1 mt-5 '>
                                <h5 className='text-capitalize landry-text m-0'>landry coat</h5>
                                <Link className='text-muted' to="#"><i class="fa-regular fa-bookmark"></i></Link>
                            </div>
                            <span><p className='text-capitalize m-0 text-clor-maroom'>slik</p></span>
                            <div className=' custam-width custam-width-border text-size py-3'>
                                <p className='m-0 pb-2'>Colour: Deep Teal+light Sand+red Ochre (T1G4)</p>
                                <div className='border-img Landry-iner-img py-1 mb-2'>
                                    <Link to="#"> <img className='small-img' src="/assets/img/small.png" alt="" /></Link>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between custam-width  custam-width-border py-3'>
                                <div>
                                    <Link className='text-capitalize text-decoration-none text-clor-maroom' to="#">select size</Link>
                                </div>
                                <div>
                                    <span><i class="fa-solid fa-angle-right"></i></span>
                                </div>
                                <div>
                                    <Link className='text-capitalize  text-clor-maroom' to="#">size guide</Link>
                                </div>
                            </div>
                            <div className='custam-width-border custam-width'>
                                <div className='pt-5 mb-3'>
                                    <Link className='text-decoration-none' to="#"><div className='text-center bg-clor-maroom text-white w-100'><p className='m-0 border-top border-bottom py-2'>find in store</p></div></Link>
                                </div>
                                <div className='mb-3'> <span>You need help ? </span> <Link to="#" className='text-clor-maroom '>Contact us</Link></div>
                                <div className='mt-5 mb-4'>
                                    <p >Explore the captivating Tree of Life print with this piece, where lush florals offer soulful joy for seasonal renewal. This modern coat, made of</p>
                                    <Link className='text-clor-maroom' to="#">Read more</Link>
                                </div>
                                <Link to="#" className='text-decoration-none text-muted'>
                                    <div className='d-flex'>
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
                            <img src="/assets/img/product.png" className='img-fluid w-100 sm-padding' alt="" />
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