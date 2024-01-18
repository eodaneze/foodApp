import React from "react";
import Navbar from "../components/Navbar";
import DynamicHero from "../components/DynamicHero";
import DynamicMenu from "../components/DynamicMenu";
const Menu = () => {
	return (
		<div>
			{/* Navbar & Hero Start  */}
			<div className="container-xxl position-relative p-0">
				<Navbar />
				<DynamicHero page={"Menu"}/>
			</div>
			{/* Navbar & Hero End */}

			{/* Menu Start */}
			<DynamicMenu />
			{/* Menu End  */}
		</div>
	);
};

export default Menu;
