import React, { Component } from 'react'
import './assert/css/style.css'

export default class MeetTheBirds extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center p-5" data-aos="zoom-in-up">
                                <img src={require("./assert/img/meet-banner.png")} className="img-fluid w-50 m-img" alt="meetBanner" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-5 m-t-b">

                    <h1 className="col-12 text-center section-title-6 mb-5 pb-md-5" data-aos="fade-up">Meet the birds</h1>

                    <div className="container ">
                        <div className="row mb-md-5 pb-md-5 mb-5 ">
                            <div className="col-12 col-md-6  text-md-right " data-aos="zoom-in-right">
                                <a href="#contact"><img src={require("./assert/img/meet-1.png")} className="img-fluid w-30 w-75" alt="contact" /></a>
                            </div>
                            <div className="col-12 col-md-6 " data-aos="zoom-in-left">
                                <div className=" meet-box p-4 mt-4">
                                    <h4>Budgies</h4>
                                    <p>The budgie (parakeet) is often thought of as a “beginner bird,” however, this social, outgoing little bird deserves just as much care and attention as larger parrots. Budgies are playful, love food and they can rival any parrot in terms of talking ability. Its Latin name means, roughly, “song bird with wavy lines,” which is a pretty good description of this popular bird. Europeans became charmed with the birds, which bred readily, making them a staple pet in wealthy homes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-md-5 pb-md-5 mb-5">
                            <div className="col-12 col-md-6" id="one" data-aos="zoom-in-right">
                                <div className="meet-box p-4 mt-4 mb-5 mb-md-0">
                                    <h4>Rossella</h4>
                                    <p>If you want a gorgeous bird for an aviary or habitat setting, or have the space in your home to give this bird the appropriate room, then the rosella might be the bird for you. With their vibrant colors, rosellas are hard to overlook. A rosella will charm you with its whistles, too!</p>

                                    <p>Rosellas are often sought out as pet birds because of their striking appearance. They tend to be kept in an aviary setup with others of their kind; however, a well-socialized, hand-tamed rosella can be a sociable companion , like what we have with us.</p>

                                </div>
                            </div>
                            <div className="col-12 col-md-6  text-md-left" id="two" data-aos="zoom-in-left">
                                <a href="#contact"><img src={require("./assert/img/meet-2.png")} className="img-fluid w-30 w-75" alt="meet-2" /></a>
                            </div>
                        </div>
                        <div className="row mb-md-5 pb-md-5 mb-5 ">
                            <div className="col-12 col-md-6  text-md-right" data-aos="zoom-in-right">
                                <a href="#contact"><img src={require("./assert/img/meet-3.png")} className="img-fluid w-30 w-75" alt="meet-3" /></a>
                            </div>
                            <div className="col-12 col-md-6" data-aos="zoom-in-left">
                                <div className="meet-box p-4 mt-4">
                                    <h4>Cockatiel</h4>
                                    <p>There’s a reason why the cockatiel is one of the most popular companion birds — this slender Australian parrot can be both cuddly and bold. Cockatiels can also be curious and, at times, feisty. With a cockatiel in the house, you are likely to hear a repertoire of chirps and whistles.
         Cuddly, outgoing and comical are just three reasons why the cockatiel is the No. 1 pet bird in England. A healthy, well-socialized cockatiel can make a great family pet and is also ideal for apartment living.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-md-5 pb-md-5 mb-5">
                            <div className="col-12 col-md-6" id="one" data-aos="zoom-in-right">
                                <div className="meet-box p-4 mt-4 mb-5 mb-md-0">
                                    <h4>Love Birds</h4>
                                    <p>A lovebird might be one of the smaller parrot species available as a companion pet, but this bird is inquisitive and seemingly always on the go. As their name suggests, lovebirds are known for the loving, attentive bond they tend to form with their mates. Lovebirds are so named because of their strong pair bonds.Lovebirds have short, blunt tail feathers, unlike budgies, which have long pointed tails, and lovebirds are also stockier.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6  text-md-left" id="two" data-aos="zoom-in-left">
                                <a href="#contact"><img src={require("./assert/img/meet-4.png")} className="img-fluid w-30 w-75" alt="meet-4" /></a>
                            </div>
                        </div>


                    </div>

                    <div className="container plan text-center">
                        <p>
                            <a className="btn btn-custom mb-5" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" data-aos="flip-down" aria-controls="collapseExample">
                                We are also planning to have</a>
                        </p>
                        <div className=" collapse row" id="collapseExample" >
                            <div className=" col-md-3 col-12 mb-4" >
                                <div className="card  p-3">
                                    <img className="card-img-top" src={require("./assert/img/w-a-p-1.jpg")} className="img-fluid" alt="african grey parrot" />
                                    <h4 className="card-body">African grey parrot</h4>
                                </div>
                            </div>
                            <div className=" col-md-3 col-12 mb-4">
                                <div className="card  p-3">
                                    <img className="card-img-top" src={require("./assert/img/w-a-p-2.jpg")} className="img-fluid" alt="Macaw" />
                                    <h4 className="card-body">Macaw</h4>
                                </div>
                            </div>
                            <div className=" col-md-3 col-12 mb-4">
                                <div className="card  p-3">
                                    <img className="card-img-top" src={require("./assert/img/w-a-p-3.jpg")} className="img-fluid" alt="Ringneck" />
                                    <h4 className="card-body">Ringneck</h4>
                                </div>
                            </div>
                            <div className=" col-md-3 col-12 mb-4">
                                <div className="card  p-3">
                                    <img className="card-img-top" src={require("./assert/img/w-a-p-4.jpg")} className="img-fluid" alt="Cockatoos" />
                                    <h4 className="card-body">Cockatoos</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
