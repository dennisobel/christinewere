import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import cimg1 from '../../images/case/img-1.jpg'
import cimg2 from '../../images/case/img-2.jpg'
import cimg3 from '../../images/case/img-3.jpg'
import cimg4 from '../../images/case/img-4.jpg'
import cimg5 from '../../images/case/img-5.jpg'
import cimg6 from '../../images/case/img-6.jpg'

class CaseStudies extends Component {

    state = {
        onThrdParty: false,
        onB2G: false,
        onPromotional: false,
        onRealEstate: false,
        onPersonal: false,
        isOpen : false,
    }
    

    render() {

        const allElement = event => {
            event.preventDefault();
            this.setState({
                onPromotional: true,
                onB2G: true,
                onThrdParty: true,
                onRealEstate: true,
            });
        }

        const thrdParty = event => {
            event.preventDefault();
            this.setState({
                onThrdParty: true,
                onB2G: false,
                onPromotional: false,
                onRealEstate: false,
                isOpen: true,
            });
        }

        const b2gSolutions = event => {
            event.preventDefault();
            this.setState({
                onB2G: true,
                onThrdParty: false,
                onPromotional: false,
                onRealEstate: false,
                isOpen: true,
            });
        }

        const promotionalItems = event => {
            event.preventDefault();
            this.setState({
                onPromotional: true,
                onB2G: false,
                onThrdParty: false,
                onRealEstate: false,
                isOpen: true,
            });
        }

        // const RealEstate = event => {
        //     event.preventDefault();
        //     this.setState({
        //         onRealEstate: true,
        //         onPromotional: false,
        //         onB2G: false,
        //         onThrdParty: false,
        //         isOpen: true,
        //     });
        // }
        // const Personal = event => {
        //     event.preventDefault();
        //     this.setState({
        //         onPromotional: true,
        //         onB2G: true,
        //         onThrdParty: true,
        //         onRealEstate: true,
        //     });
        // }


        const Cases = [
            {
                Id: '1',
                cTitle: '3rd Party Monitoring', 
                filterName1: this.state.onB2G,
                filterName2: this.state.onPromotional,
                // filterName3: this.state.onRealEstate,
                // filterName5: this.state.onPersonal,
                cImg:cimg1,
            },
            {
                Id: '2',
                cTitle: 'B2G Solutions', 
                filterName1: this.state.onThrdParty,
                filterName2: this.state.onB2G,
                filterName3: this.state.onPromotional,
                // filterName4: this.state.onRealEstate,
                // filterName5: this.state.onPersonal,
                cImg:cimg2,
            },
            {
                Id: '3',
                cTitle: 'Promotional Items', 
                filterName1: this.state.onThrdParty,
                filterName2: this.state.onPromotional,
                cImg:cimg3,
            },
            // {
            //     Id: '4',
            //     cTitle: 'Real Estate', 
            //     filterName1: this.state.onB2G,
            //     filterName2: this.state.onRealEstate,
            //     filterName5: this.state.onPersonal,
            //     cImg:cimg4,
            // },
            // {
            //     Id: '5',
            //     cTitle: 'Personal Injury', 
            //     filterName1: this.state.onPromotional,
            //     filterName2: this.state.onThrdParty,
            //     cImg:cimg5,
            // },
            // {
            //     Id: '6',
            //     cTitle: 'Family Law', 
            //     filterName1: this.state.onThrdParty,
            //     filterName2: this.state.onB2G,
            //     filterName3: this.state.onPromotional,
            //     cImg:cimg6,
            // }
        ]

        const ClickHandler = () =>{
            window.scrollTo(10, 0);
         }



        return (
            <section className="wpo-case-section section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="wpo-section-title">
                                <h2>Resent Case Studies & Our
                                    Best Work.</h2>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-2">
                            <div className="wpo-section-title">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="sortable-gallery">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="gallery-filters case-menu">
                                    <ul>
                                        <li><Link to="/" className="current" onClick={allElement}>All Project</Link></li>
                                        <li><Link to="/" onClick={thrdParty}>3rd Party Monitoring</Link></li>
                                        <li><Link to="/" onClick={b2gSolutions}>B2G Solutions</Link></li>
                                        <li><Link to="/" onClick={promotionalItems}>Promotional Items</Link></li>               
                                        {/* <li><Link to="/" onClick={RealEstate}>Real Estate</Link></li> 
                                        <li><Link to="/" onClick={Personal}>Personal Injury</Link></li>  */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <div className="case-grids gallery-container clearfix">
                                    {Cases.map((Case, citem) => (
                                        <div className={Case.filterName1 ? "grid active" : "grid"
                                            && Case.filterName2 ? "grid active" : "grid"
                                            && Case.filterName3 ? "grid active" : "grid"
                                            && Case.filterName4 ? "grid active" : "grid"
                                            && Case.filterName5 ? "grid active" : "grid"
                                            && this.state.isOpen ? "grid" : "grid open"
                                            } key={citem}>

                                        <div className="img-holder">
                                                <img src={Case.cImg} className="img img-responsive" alt="" />
                                                <div className="hover-content">
                                                    <Link onClick={ClickHandler} className="theme-btn" to={`/case-single/${Case.Id}`}>{Case.cTitle}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default CaseStudies;