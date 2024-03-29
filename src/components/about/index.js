import React from 'react'
import abimg from '../../images/about.jpg'
import sign from '../../images/signeture.png'


const About = (props) => {
    return(
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="wpo-about-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <img src={abimg} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-12">
                            <div className="wpo-about-content">
                                <div className="wpo-section-title">
                                    <h2>We aim to provide businesses with the tools they need to succeed in the public sector</h2>
                                </div>
                                <div className="wpo-about-content-inner">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable and going through the cites of the word in classNameical literature, discovered the
                                        undoubtable source. Lorem Ipsum comes from sections.</p>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                        in a piece of classNameical Latin literature from 45 BC, making it over 2000 years
                                        old consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua.</p>
                                    <div className="signeture">
                                        <h4>Mertie Warrior</h4>
                                        <p>Vertex Chambers, CEO</p>
                                        <span><img src={sign} alt=""/></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;