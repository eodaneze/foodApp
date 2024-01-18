import React from "react";
import DynamicHero from "../components/DynamicHero";
import Navbar from "../components/Navbar";

const Contact = () => {
	return (
		<div>
			<div className="container-xxl position-relative p-0">
				<Navbar />
				<DynamicHero page={"Contact"} />
			</div>
		</div>
	);
};

export default Contact;
