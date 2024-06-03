import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Elements
import BackToTop from './elements/back-top';
import PageScrollTop from './elements/page-scroll-top';

// Layout
import Header from "./layout/header";
import Footer from "./layout/footer";

// All Pages Router
import Index from './pages/index';
import Index2 from './pages/index-2';
import AboutUs from './pages/about-1';
import AboutUs2 from './pages/about-2';
import BlogDetails from './pages/blog-details';
import BlogGrid from './pages/blog-grid';
import BlogGridSidebar from './pages/blog-grid-sidebar';
import BlogListSidebar from './pages/blog-list-sidebar';
import Booking from './pages/booking';
import ContactUs from './pages/contact-1';
import ContactUs2 from './pages/contact-2';
import Faq1 from './pages/faq-1';
import JobCareer from './pages/job-career';
import Login from './pages/login';
import Register from './pages/register';
import ForgetPassword from './pages/forget-password';
import PricingPlan from './pages/pricing-plan';
import Services from './pages/service-1';
import Services2 from './pages/service-2';
import ServiceAirConditioning from './pages/service-air-conditioning';
import ServiceBeltsAndHoses from './pages/service-belts-and-hoses';
import ServiceBrakeRepair from './pages/service-brake-repair';
import ServiceEngineDiagnostics from './pages/service-engine-diagnostics';
import ServiceLubeOilAndFilters from './pages/service-lube-oil-and-filters';
import ServiceTireAndWheelServices from './pages/service-tire-and-wheel-services';
import Team from './pages/team';
import TeamDetails from './pages/team-details';
import Error from './pages/error-404';

class Markup extends Component{
	render(){
		return(
			<>	
			
			<BrowserRouter basename={'/react'}>
				{/* <BrowserRouter> */}
					
					<Routes>
						
						<Route element={<ThemeLayout />}>
							<Route path='/' element={<Index />} />
							<Route path='/index-2' element={<Index2 />} />
							<Route path='/about-1' element={<AboutUs />} />
							<Route path='/about-2' element={<AboutUs2 />} />
							<Route path='/blog-details' element={<BlogDetails />} />
							<Route path='/blog-grid' element={<BlogGrid />} />
							<Route path='/blog-grid-sidebar' element={<BlogGridSidebar />} />
							<Route path='/blog-list-sidebar' element={<BlogListSidebar />} />
							<Route path='/booking' element={<Booking />} />
							<Route path='/contact-1' element={<ContactUs />} />
							<Route path='/contact-2' element={<ContactUs2 />} />
							<Route path='/faq-1' element={<Faq1 />} />
							<Route path='/job-career' element={<JobCareer />} />
							<Route path='/pricing-plan' element={<PricingPlan />} />
							<Route path='/service-1' element={<Services />} />
							<Route path='/service-2' element={<Services2 />} />
							<Route path='/service-air-conditioning' element={<ServiceAirConditioning />} />
							<Route path='/service-belts-and-hoses' element={<ServiceBeltsAndHoses />} />
							<Route path='/service-brake-repair' element={<ServiceBrakeRepair />} />
							<Route path='/service-engine-diagnostics' element={<ServiceEngineDiagnostics />} />
							<Route path='/service-lube-oil-and-filters' element={<ServiceLubeOilAndFilters />} />
							<Route path='/service-tire-and-wheel-services' element={<ServiceTireAndWheelServices />} />
							<Route path='/team' element={<Team />} />
							<Route path='/team-details' element={<TeamDetails />} />
						</Route>
						
						<Route path="*" element={<Error />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path='/forget-password' element={<ForgetPassword />} />
						
					</Routes>
					
					<PageScrollTop />
					
				</BrowserRouter>
				
				<BackToTop />
				
			</>
		);
	}
}
function ThemeLayout(){
	return(
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
export default Markup;