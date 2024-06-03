import React, { Component } from 'react';

// Import Images
import galleryPic1 from "../../../images/gallery/pic1.jpg";
import galleryPic2 from "../../../images/gallery/pic2.jpg";
import galleryPic3 from "../../../images/gallery/pic3.jpg";
import galleryPic4 from "../../../images/gallery/pic4.jpg";
import galleryPic5 from "../../../images/gallery/pic5.jpg";
import galleryPic6 from "../../../images/gallery/pic6.jpg";

const content = [
	{
		thumb: galleryPic1,
	},
	{
		thumb: galleryPic2,
	},
	{
		thumb: galleryPic3,
	},
	{
		thumb: galleryPic4,
	},
	{
		thumb: galleryPic5,
	},
	{
		thumb: galleryPic6,
	},
]

class WidgetGallery extends Component{
	render(){
		return(
			<>
				
				<div className="widget widget_gallery gallery-grid-3">
					<h5 className="widget-title">Our Gallery</h5>
					
					<ul className="magnific-image">						
						{content.map((item, index) => (
							<li key={index}><img src={item.thumb} alt=""/></li>
						))}
					</ul>
					
				</div>
				
			</>
		);
	}
}

export default WidgetGallery;