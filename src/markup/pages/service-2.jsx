import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Elements
import FeatureTwoSection from "../elements/feature-bx2";
import ScheduleServiceSection from "../elements/schedule-service";
import PartnerShipsSection from "../elements/partnerships";

// Images
import bnrImg from "../../images/banner/bnr4.jpg";

class Services2 extends Component{
	
	render(){
		return (
			<>
				
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Services 2</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Services 2</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
					<FeatureTwoSection />
					
					<ScheduleServiceSection />
					
					<PartnerShipsSection />
					
				</div>
				
			</>
		);
	}
}

export default Services2;