import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/images/TedXLogo.png";
import BIRDS from "vanta/dist/vanta.birds.min";
import "./contactUs.css";
import "./contactUs_animation";
import Form from "../../components/form/Form";
import { Link } from "react-router-dom";
const ContactUs = (props) => {
	const [vantaEffect, setVantaEffect] = useState(0);
	const myRef = useRef(null);
	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				BIRDS({
					el: myRef.current,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 1.0,
					scaleMobile: 1.0,
					backgroundColor: 0x000000,
					color1: 0xe62b1e,
					color2: 0xe62b1e,
					colorMode: "lerpGradient",
					separation: 75.0,
					alignment: 10.0,
					cohesion: 1.0,
					quantity: 4.0,
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);
	return (
		<>
			<div className="animated-bg">
				<Link to="/"><img src={logo} className="sponsor-page-logo" alt="" /></Link>
				<div className="title">
					<div className="title_head">
						<h1>Contact Us</h1>
					</div>
					<div className="title_desc">
						Tedx Bits Pilani Hyderabad Campus. Content will be added as soon as
						we get it !!!!!!!!!!!!!
					</div>
				</div>
				<div ref={myRef} className="vantajs"></div>
			</div>
			<Form />
			
		</>
	);
};

export default ContactUs;