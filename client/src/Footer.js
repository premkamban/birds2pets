import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        const style = {
            FooterLine: {
                fontSize: "0.75rem"
            },
            color: {
                color: "#000",
                textDecoration: "underline"
            },
            phone: {
                color: "#000",
                textDecoration: "underline"
            }
        }
        return (
            <React.Fragment>
                <section className=" text-center text-md-left mt-5 pt-5 pb-4" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-12" data-aos="zoom-in-right">
                                <h1 className="section-title-5 text-center bold-h-h">Contact us</h1>
                            </div>
                        </div>
                        <div className="row mt-md-5 mt-3 mb-3 mt-mb-5">

                            <div className="col-md-12 col-12 text-center" data-aos="zoom-in-left">
                                <div className="  mt-5 pt-md-3 mt-md-0">
                                    <img src={require("./assert/img/address.png")} className="img-fluid w-25 mb-4" />
                                    <p><strong>Email :</strong> <a href="mailto:support@bicesterbirds4sale.co.uk" style={style.ph}>support@bicesterbirds4sale.co.uk</a></p>
                                    <p><strong>Phone :</strong> <a href="tel:07553 356460" style={style.phone}>07553 356460 </a></p>
                                    <p><strong>Address :</strong> 31 Redcar Road, Bicester, OX26 1BQ</p>
                                </div>
                                <div className=" mt-5  pt-md-3 mt-md-0" >
                                    <h5>Follow us:</h5>
                                    <a href="https://www.facebook.com/BicesterBirds/" target="_blank" className="fa fa-facebook"></a>
                                    <a href="https://www.instagram.com/bicesterbirds/" target="_blank" className="ml-3 fa fa-instagram"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
