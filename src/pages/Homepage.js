import React from "react";
// import Spinner from "../components/Spinner";
import Navbar from "../components/Navbar";
import Hero from "../components/Homepage/Hero";
import Service from "../components/Homepage/Service";
import About from "../components/Homepage/About";
import DynamicMenu from "../components/DynamicMenu";

const Homepage = () => {
	return (
		<div>
			{/* <Spinner /> */}
			{/* Navbar & Hero Start */}
			<div className="container-xxl position-relative p-0">
				<Navbar />
				<Hero />
			</div>
			{/*  */}
			{/* Navbar & Hero End */}

			{/* Service Start  */}
			<Service />
			{/* Service End */}

			{/* About Start */}
			<About />
			{/* About End */}

			{/* Menu Start */}
			<DynamicMenu />
			{/* Menu End  */}
		</div>
	);
};

export default Homepage;
