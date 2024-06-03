import React, {Component} from 'react';

// Elements
import SliderTwoSection from "../elements/home-slider/slider2";
import PartnerShipsSection from "../elements/partnerships";
import AboutUsFourSection from "../elements/about-us-4";
import FeatureThreeSection from "../elements/feature-bx3";
import TeamTwoSection from "../elements/team-2";
import BlogSection from "../elements/blog-section";

class Index2 extends Component{
	
	render(){
		return (
			<>
				
				<SliderTwoSection />
				
				<PartnerShipsSection />
				
				<AboutUsFourSection />
				
				<FeatureThreeSection />
				
				<TeamTwoSection />
				
				<BlogSection />
				
			</>
		);
	}
}

export default Index2;