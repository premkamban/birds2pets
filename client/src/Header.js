import React, { Component } from 'react'

export default class Header extends Component {

    render() {
        const style = {
            width: "190px"
        };
        return (
            <React.Fragment>
                <div className="preloader"></div>
                <section className=" pb-5 mb-5 mb-lg-0  navbar-head ">
                    <nav className="navbar  navbar-expand-lg  fixed-top p-md-2 p-sm-2" data-aos="fade-down">
                        <div className="container">
                            <a className="navbar-brand" href="#">
                                <img src={require("./assert/img/logo.png")} className="img-fluid" style={style} alt="logo" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" id="show"></span>
                                <span className="navbar-toggle-icon" id="hide"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/#">Home
                <span className="sr-only">(current)</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#abt">About us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/#our">Our Birds</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/#care">Care Sheet</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/#gallery">Gallery</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/#test">Testimonials</a>
                                    </li>
                                    <li className="nav-item ct">
                                        <a className="nav-link nav-ct" href="#contact">Contact us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </section>


            </React.Fragment>
        )
    }
}
