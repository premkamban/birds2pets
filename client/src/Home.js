import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {


    const style = {
        maxHeight: "385px"
    }

    return (
        <React.Fragment>
            <section className="banner">
                <div id="carouselExampleIndicators" data-aos="zoom-in" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators ">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={require("./assert/img/banner-1.jpg")} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require("./assert/img/banner-2.jpg")} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require("./assert/img/banner-3.jpg")} alt="Third slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require("./assert/img/banner-4.jpg")} alt="Third slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require("./assert/img/banner-5.jpg")} alt="Third slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require("./assert/img/banner-6.jpg")} alt="Third slide" />
                        </div>
                    </div>

                    <div className="d-block d-lg-none  d-sm-block">
                        <a className="carousel-control-prev" style={{ zIndex: 99 }} href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </section>


            <section className="title-h p-5" id="abt">
                <div className="container" >
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-md-left section-title text-center" data-aos="fade-up">About us</h1>
                        </div>
                        <div className="container row mt-4">
                            <div className="col-md-5 col-12" data-aos="fade-up">
                                <p>Welcome to Bicester Birds, we are passionate breeders, breeding
				Budgies, Cockatiels, Finches, Canaries, Lovebirds and other Parakeets since 2015. I also hand rear some of my babies from time to time. If you're looking for a healthy feathered friend, then contact us.</p>
                                <h5 className="mt-md-5 mt-4 text-md-left text-center">Our Team</h5>
                                <p className="mt-md-3">We are a team of 10 breeders located in each part of the UK and we breed anything from small to big parrots. Our top selling birds are Cockatiels and Ringnecks.</p>
                                <p className="mt-md-3">We breed our birds throughout the year, we pick our young birds from our aviaries on each Sunday. All buyers must reserve the bird with small deposit.</p>
                                <p className="mt-md-3">
                                    Our aviaries for breeding based in London, Birmingham, Manchester, Northampton, Cambridge, Bicester and York.</p>
                            </div>
                            <div className="col-md-7 col-12 text-center" data-aos="fade-left">
                                <img src={require("./assert/img/about-us.png")} className="img-fluid mt-md-5 pt-md-5 pt-lg-0 mt-lg-0 pl-md-5 ml-md-5" style={{ maxHeight: "385px" }} alt="about us" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="birds-h p-5" id="our">
                <div className="container" data-aos="fade-down-left">
                    <div className="row w-30 d-block mt-5 mx-auto p-4 mb-5" style={{ border: "dotted 0.5px #000" }}>
                        <div className="col-12 text-center" >
                            <h1 className=" section-title-2 ">Meet The Birds</h1>
                            <p className="o-reg mt-4">Please meet<br />
                                    our feathered<br />
                                        friend’s!</p>
                            <Link to={`/meet`} data-aos="fade-up-right" className="btn btn-custom">Click here to meet them</Link>
                        </div>
                    </div>
                </div>
            </section>


            <section className="title-h p-5" id="care">
                <div className="container">
                    <div className="row">
                        <div className="container row mt-4">
                            <div className="col-md-5 col-12" data-aos="fade-up-right">
                                <h1 className="text-md-left section-title-3">How to look after the birds</h1>
                                <p className="w-75 mt-4">Please refer to the below pdf to for the
				guide to take care of the birds</p>
                                <a href={require("./assert/pdf/birds.pdf")} target="_blank" data-aos="fade-up" className="btn btn-custom mt-2 mb-5 btn-primary">Download pdf</a>
                            </div>
                            <div className="col-md-7 col-12 text-center" data-aos="fade-left">
                                <img src={require("./assert/img/abt-img.png")} className="img-fluid pl-md-5 ml-md-5" style={style} alt="birs" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="title-o p-5" id="gallery" >

                <h1 className="col-12 text-center section-title-4">Our Gallery</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="mt-5">
                            <div className="row no-gutters">
                                <div className="col-lg-4 col-md-4 col-xs-6 thumb img-hover">
                                    <a className="thumbnail" href="#" data-image-id="" data-toggle="modal"
                                        data-image={require("./assert/img/banner-1.jpg")}
                                        data-target="#image-gallery">
                                        <img className="img-thumbnail image"
                                            src={require("./assert/img/banner-1.jpg")}
                                            alt="Another alt text" />

                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-4 col-xs-6 thumb img-hover">
                                    <a className="thumbnail" href="#" data-image-id="" data-toggle="modal"
                                        data-image={require("./assert/img/banner-2.jpg")}
                                        data-target="#image-gallery">
                                        <img className="img-thumbnail image"
                                            src={require("./assert/img/banner-2.jpg")}
                                            alt="Another alt text" />
                                    </a>
                                </div>

                                <div className="col-lg-4 col-md-4 col-xs-6 thumb img-hover">
                                    <a className="thumbnail" href="#" data-image-id="" data-toggle="modal"
                                        data-image={require("./assert/img/banner-3.jpg")}
                                        data-target="#image-gallery">
                                        <img className="img-thumbnail image"
                                            src={require("./assert/img/banner-3.jpg")}
                                            alt="Another alt text" />
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-4 col-xs-6 thumb img-hover">
                                    <a className="thumbnail" href="#" data-image-id="" data-toggle="modal"
                                        data-image={require("./assert/img/banner-4.jpg")}
                                        data-target="#image-gallery">
                                        <img className="img-thumbnail image"
                                            src={require("./assert/img/banner-4.jpg")}
                                            alt="Another alt text" />
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-4 col-xs-6 thumb img-hover">
                                    <a className="thumbnail" href="#" data-image-id="" data-toggle="modal"
                                        data-image={require("./assert/img/banner-5.jpg")}
                                        data-target="#image-gallery">
                                        <img className="img-thumbnail image"
                                            src={require("./assert/img/banner-5.jpg")}
                                            alt="Another alt text" />
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-4 col-xs-6 thumb img-hover">
                                    <a className="thumbnail" href="#" data-image-id="" data-toggle="modal"
                                        data-image={require("./assert/img/banner-6.jpg")}
                                        data-target="#image-gallery">
                                        <img className="img-thumbnail image"
                                            src={require("./assert/img/banner-6.jpg")}
                                            alt="Another alt text" />
                                    </a>
                                </div>
                            </div>
                            <div className="modal fade" id="image-gallery" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title" id="image-gallery-title"></h4>
                                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <img id="image-gallery-image" className="img-fluid col-md-12" src="" alt="Modal" />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary float-left" id="show-previous-image"><i className="fa fa-arrow-left"></i>
                                            </button>

                                            <button type="button" id="show-next-image" className="btn btn-secondary float-right"><i className="fa fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>






            <section className="testimonial text-center" id="test" data-aos="fade-up">
                <div className="container">

                    <div className="heading white-heading" style={{ fontSize: "3rem", fontWeight: 700, fontFamily: "Amatic SC ,cursive" }}>
                        Testimonials
            </div>
                    <div id="testimonial4" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">

                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="testimonial4_slide">
                                    <img src={require("./assert/img/testi-1.png")} className="img-circle img-fluid" />
                                    <p>The service was amazing 10 out of 10. I ordered 3 Cockatiels last week but gave it a week to settle them in, but the bird’s are already started to become tamed. The bird sit on my top without any fear. I booed delivery service through Walkers and received in a week without any hassle. thank you very much have recommended to my friends and I my self will be back in the future.</p>
                                    <h4>- John Ferris</h4>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testimonial4_slide">
                                    <img src={require("./assert/img/testi-2.png")} className="img-circle img-fluid" /><p>2nd time buy from guys. Can’t praise enough. The communication is EXCELLENT. Birds are so well cared for.💙 Bought a pair of cockatiels, Both well settled and an absolute delight. Well done on such great service and livestock. Would not go anywhere else.❤❤❤❤</p>
                                    <h4>- Elena Diana </h4>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testimonial4_slide">
                                    <img src={require("./assert/img/testi-3.png")} className="img-circle img-fluid" />
                                    <p>The service from them is amazing 10 out of ten!!🤩 i ordered last week but gave it a week to see how the bird's are and there in amazing shape already starting to tame same day dalivery was perfect thank you very much !! have recommended to my aviary friends and i myself be back in the future show less!! great great cockatiels!!! Thank you☺☺☺</p>
                                    <h4>- Cami Cami</h4>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#testimonial4" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#testimonial4" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
            </section>
        </React.Fragment>


    )

}
