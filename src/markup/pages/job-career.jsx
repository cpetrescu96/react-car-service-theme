import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Elements
import WidgetContact from "../elements/widget/widget-contact";

// Images
import bnrImg from "../../images/banner/bnr2.jpg";

class JobCareer extends Component{
	
	render(){
		return (
			<>
				
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Job Career</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Job Career</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
					<div className="section-area bg-gray section-sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 col-md-7 mb-md-20">
									<div className="heading-bx">
										<h6 className="title-ext text-primary">Job Career</h6>
										<h2 className="title mb-0">CHOOSE THE CAREER THAT FITS YOU PERFECTLY</h2>
										<p className="head-px2">Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.</p>
									</div>
									<div className="row">
										<div className="col-md-12 mb-30">
											<div className="job-career-box">
												<h4>ENGINE REPAIR</h4>
												<p><strong>Position:</strong> Mechanical Engineering</p>
												<p><strong>Experience:</strong> 4 5 years</p>
												<p><strong>Location:</strong> 2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
												<p><strong>Minimum Qualification Requirement :</strong> MBA</p>
												<p><strong>Job Description:</strong> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
												<p><strong>Key Responsibilities:</strong> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
												<ul className="list-check">
													<li>Extensive experience with WordPress architecture, custom content types and plugins</li>
													<li>Strong understanding of PHP</li>
													<li>Solid foundation in front-end technologies such as HTML5, CSS3, Javascript and Ajax is plus.</li>
													<li>Experience with version control (Git preferred)</li>
													<li>Knowledge of best practices (standard naming conventions, code styles, security, etc.)</li>
													<li>Experience with Adobe Photoshop</li>
													<li>Intermediate understanding of coding SEO-friendly sites</li>
												</ul>
												<p><strong>Soft Skills:</strong> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
												<Link to="/contact-1" className="btn btn-primary mt-10">Apply Now</Link>
											</div>
										</div>
										<div className="col-md-12 mb-30">
											<div className="job-career-box">
												<h4>BREAK REPAIR</h4>
												<p><strong>Position:</strong> Mechanical Engineering</p>
												<p><strong>Experience:</strong> 4 5 years</p>
												<p><strong>Location:</strong> 2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
												<p><strong>Minimum Qualification Requirement :</strong> MBA</p>
												<p><strong>Job Description:</strong> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
												<p><strong>Key Responsibilities:</strong> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
												<ul className="list-check">
													<li>Extensive experience with WordPress architecture, custom content types and plugins</li>
													<li>Strong understanding of PHP</li>
													<li>Solid foundation in front-end technologies such as HTML5, CSS3, Javascript and Ajax is plus.</li>
													<li>Experience with version control (Git preferred)</li>
													<li>Knowledge of best practices (standard naming conventions, code styles, security, etc.)</li>
													<li>Experience with Adobe Photoshop</li>
													<li>Intermediate understanding of coding SEO-friendly sites</li>
												</ul>
												<p><strong>Soft Skills:</strong> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
												<Link t="/contact-1" className="btn btn-primary mt-10">Apply Now</Link>
											</div>
										</div>
										<div className="col-md-12 mb-30">
											<div className="job-career-box">
												<h4>CAR PAINTING</h4>
												<p><strong>Position:</strong> Mechanical Engineering</p>
												<p><strong>Experience:</strong> 4 5 years</p>
												<p><strong>Location:</strong> 2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
												<p><strong>Minimum Qualification Requirement :</strong> MBA</p>
												<p><strong>Job Description:</strong> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
												<p><strong>Key Responsibilities:</strong> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
												<ul className="list-check">
													<li>Extensive experience with WordPress architecture, custom content types and plugins</li>
													<li>Strong understanding of PHP</li>
													<li>Solid foundation in front-end technologies such as HTML5, CSS3, Javascript and Ajax is plus.</li>
													<li>Experience with version control (Git preferred)</li>
													<li>Knowledge of best practices (standard naming conventions, code styles, security, etc.)</li>
													<li>Experience with Adobe Photoshop</li>
													<li>Intermediate understanding of coding SEO-friendly sites</li>
												</ul>
												<p><strong>Soft Skills:</strong> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
												<Link to="/contact-1" className="btn btn-primary mt-10">Apply Now</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-5 mb-20">
									<aside className="sticky-top">
										<div className="widget">
											<h5 className="widget-title">Our Inner Pages</h5>
											<ul className="service-menu style-1">
												<li><Link to="/about-1">About Us <i className="las la-question-circle"></i></Link></li>
												<li><Link to="/service-1">Our Services <i className="las la-cog"></i></Link></li>
												<li className="active"><Link to="/job-career">Job & Career<i className="las la-user-plus"></i></Link></li>
												<li><Link to="/pricing-plan">Pricing<i className="las la-table"></i></Link></li>
												<li><Link to="/team">Our Team<i className="las la-user-tie"></i></Link></li>
												<li><Link to="/booking">Booking<i className="lab la-wpforms"></i></Link></li>
												<li><Link to="/faq-1">Faq<i className="las la-quote-left"></i></Link></li>
											</ul>
										</div>
										
										<WidgetContact />
										
									</aside>
								</div>
							</div>
							
						</div>
					</div>
				
				</div>
				
			</>
		);
	}
}

export default JobCareer;