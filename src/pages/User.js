import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DynamicHero from "../components/DynamicHero";
import Dashboard from "../components/User-Account/Dashboard";
import Orders from "../components/User-Account/Orders";
import PaymentMethod from "../components/User-Account/PaymentMethod";
import Address from "../components/User-Account/Address";
import AccountDetails from "../components/User-Account/AccountDetails";

const User = () => {
	const [clicked, setClicked] = useState("dashboard");

	const handleClick = (section) => {
		setClicked(section);
	};

	return (
		<div>
			<div className="container-xxl position-relative p-0">
				<Navbar />
				<DynamicHero page={"Service"} />	
			</div>
			<div className="container-xxl">
            <div className="row">
					<div className="col-md-2">
						<div className="btn-group-vertical">
							<button
								className="btn btn-outline-warning mb-2"
								onClick={() => handleClick("dashboard")}
							>
								Dashboard
							</button>
							<button
								className="btn btn-outline-warning mb-2"
								onClick={() => handleClick("orders")}
							>
								Orders
							</button>
							<button
								className="btn btn-outline-warning mb-2"
								onClick={() => handleClick("payment")}
							>
								Payment Method
							</button>
							<button
								className="btn btn-outline-warning mb-2"
								onClick={() => handleClick("address")}
							>
								Address
							</button>
							<button
								className="btn btn-outline-warning mb-2"
								onClick={() => handleClick("account")}
							>
								Account Details
							</button>
							<button
								className="btn btn-outline-warning mb-2"
							>
								Logout
							</button>
						</div>
					</div>

					<div className="col-md-10 bg-white p-4 shadow">
						{clicked === "dashboard" && <Dashboard />}
						{clicked === "orders" && <Orders />}
						{clicked === "payment" && <PaymentMethod />}
						{clicked === "address" && <Address />}
						{clicked === "account" && <AccountDetails />}
					</div>
				</div>
            </div>
		</div>
	);
};

export default User;
