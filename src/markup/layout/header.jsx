import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Sticky from 'react-stickynode';

// Images
import logo from "../../images/logo.png";
import logoWhite from "../../images/logo-white.png";

const Header = () => {
	
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeItem, setActiveItem] = useState(null);
	const [isMobileView, setIsMobileView] = useState(false);
	
	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};
	const handleMenuCloseClick = () => {
		setIsMenuOpen(false);
	};
	const toggleSubmenu = (item) => {
		setActiveItem(item === activeItem ? null : item);
	};
	const handleMenuLinkClick = () => {
		if (window.innerWidth <= 991) {
			setIsMenuOpen(false);
		}
	};
	useEffect(() => {
		const handleResize = () => {
			setIsMobileView(window.innerWidth >= 768);
		};

		// Check the screen size on initial render and whenever the window is resized
		handleResize();
		
		window.addEventListener('resize', handleResize);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	},[]);
	
	const menuItems = [
		{
			id: 'home',
			name: 'Home',
			linkName: '#',
			
			subItems: [
				{
					id: 'home1',
					displayName: 'Home 1',
					linkName: ''
				},
				{
					id: 'home2',
					displayName: 'Home 2',
					linkName: 'index-2'
				},
			]
		},
		{
			id: 'pages',
			name: 'Pages',
			linkName: '#',
			
			subItems: [
				{
					id: 'about-1',
					displayName: 'About Us 1',
					linkName: 'about-1'
				},
				{
					id: 'about-2',
					displayName: 'About Us 2',
					linkName: 'about-2'
				},
				{
					id: 'team',
					displayName: 'Our Team',
					linkName: 'team'
				},
				{
					id: 'team-details',
					displayName: 'Team Details',
					linkName: 'team-details'
				},
				{
					id: 'job-career',
					displayName: 'Job & Career',
					linkName: 'job-career'
				},
				{
					id: 'faq-1',
					displayName: 'FAQ,s',
					linkName: 'faq-1'
				},
				{
					id: 'booking',
					displayName: 'Booking',
					linkName: 'booking'
				},
				{
					id: 'pricing-plan',
					displayName: 'Pricing Plan',
					linkName: 'pricing-plan'
				},
				{
					id: 'error-404',
					displayName: 'Error 404',
					linkName: 'error-404'
				},
				{
					id: 'login',
					displayName: 'Login / Register',
					linkName: 'login'
				},
			],
		},
		{
			id: 'services',
			name: 'Services',
			linkName: '#',
			
			subItems: [
				{
					id: 'service-1',
					displayName: 'Service 1',
					linkName: 'service-1'
				},
				{
					id: 'service-2',
					displayName: 'Service 2',
					linkName: 'service-2'
				},
				{
					id: 'service-engine-diagnostics',
					displayName: 'Engine Diagnostics',
					linkName: 'service-engine-diagnostics'
				},
				{
					id: 'service-lube-oil-and-filters',
					displayName: 'Lube Oil and Filters',
					linkName: 'service-lube-oil-and-filters'
				},
				{
					id: 'service-belts-and-hoses',
					displayName: 'Belts and Hoses',
					linkName: 'service-belts-and-hoses'
				},
				{
					id: 'service-air-conditioning',
					displayName: 'Air Conditioning',
					linkName: 'service-air-conditioning'
				},
				{
					id: 'service-brake-repair',
					displayName: 'Brake Repair',
					linkName: 'service-brake-repair'
				},
				{
					id: 'service-tire-and-wheel-services',
					displayName: 'Tire and Wheel Services',
					linkName: 'service-tire-and-wheel-services'
				},
			]
		},
		{
			id: 'blog',
			name: 'Blog',
			linkName: '#',
			
			subItems: [
				{
					id: 'blog-grid',
					displayName: 'Blog Grid',
					linkName: 'blog-grid'
				},
				{
					id: 'blog-grid-sidebar',
					displayName: 'Blog Grid Sidebar',
					linkName: 'blog-grid-sidebar'
				},
				{
					id: 'blog-list-sidebar',
					displayName: 'Blog List Sidebar',
					linkName: 'blog-list-sidebar'
				},
				{
					id: 'blog-details',
					displayName: 'Blog Details',
					linkName: 'blog-details'
				},
			]
		},
		{
			id: 'contact',
			name: 'Contact Us',
			linkName: '#',
			
			subItems: [
				{
					id: 'contact1',
					displayName: 'Contact Us 1',
					linkName: 'contact-1'
				},
				{
					id: 'contact2',
					displayName: 'Contact Us 2',
					linkName: 'contact-2'
				},
			]
		},
	]
  
	return(
		<>
			<header className="header header-transparent rs-nav">
				<Sticky enabled={true} className="sticky-header navbar-expand-lg">
					
					<div className="menu-bar clearfix">
						<div className="container clearfix">
							<div className="menu-logo">
								<Link to="/" className="main-logo">
									<img src={logoWhite} alt="" />
								</Link>
								<Link to="/" className="sticky-logo">
									<img src={logo} alt="" />
								</Link>
							</div>

							<Navbar.Toggle
								className={`navbar-toggler collapsed menuicon justify-content-end ${isMenuOpen ? 'open' : ''}`}
								onClick={toggleMenu}
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#menuDropdown"
								aria-controls="menuDropdown"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span></span>
								<span></span>
								<span></span>
							</Navbar.Toggle>

							<div className="secondary-menu">
								<Link to="/login" className="btn btn-outline-light">
									Sign in
								</Link>
								<Link to="/booking" className="btn btn-primary ms-3">
									Booking
								</Link>
							</div>

							<Navbar.Collapse
								className={`menu-links navbar-collapse collapse justify-content-center ${isMenuOpen ? 'show' : ''}`}
								id="menuDropdown"
							>
								<div className="menu-logo">
									<Link to="/">
										<img src={logoWhite} alt="" />
									</Link>
								</div>
								
								<ul className="nav navbar-nav">	
									{menuItems.map((item) => (
										<li
											key={item.id}
												className={`${activeItem === item.id ? 'open' : ''}`}
												onClick={() => toggleSubmenu(item.id)}
											>
											{item.subItems ? (
												<Link to="#">
													{item.name}
													<i className={`fa fa-chevron-down`}></i>
												</Link>
											) : (
												<Link to={`/${item.linkName}`} onClick={handleMenuLinkClick}>
													{item.name}
												</Link>
											)}
											{(isMobileView || activeItem === item.id) && item.subItems && (
												<ul className="sub-menu">
													{item.subItems.map((subItem, index) => (
														<li key={subItem.id}><Link to={`/${subItem.linkName}`} onClick={handleMenuLinkClick}><span>{subItem.displayName}</span></Link></li>
													))}
												</ul>
											)}
										</li>
									))}
								</ul>

								<ul className="social-media">
									<li><a target="_blank" href="https://www.facebook.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-facebook"></i></a></li>
									<li><a target="_blank" href="https://www.google.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-google-plus"></i></a></li>
									<li><a target="_blank" href="https://www.linkedin.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-linkedin"></i></a></li>
									<li><a target="_blank" href="https://twitter.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-twitter"></i></a></li>
								</ul>
								
								<div className="menu-close" id="menuClose" onClick={handleMenuCloseClick}>
									<i className="ti-close"></i>
								</div>
								
							</Navbar.Collapse>
						</div>
					</div>
				</Sticky>
			</header>
			
		</>
	);
}

export default Header;