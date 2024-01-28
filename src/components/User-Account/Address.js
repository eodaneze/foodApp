import React, { useState } from "react";

const Address = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(() => !toggle)
    }
	return (
		<div>
			<div>
				<h2>Address</h2>
				<h3>Shipping Address</h3>
				<p>123 Payment Street, Los Angelos, CA</p>
				<p>Mobile: 0190-1929-191</p>
			</div>
			<div className="d-flex flex-column gap-4">
				<div>
					<button className="btn btn-primary" onClick={handleToggle}>Edit Address</button>
				</div>
				{
                    toggle && <div className="d-flex gap-2">
					<form>
						<input type="email" placeholder="Enter Your Email" className="form-control"/>
					</form>
					<button className="btn btn-primary" onClick={handleToggle}>Submit</button>
				</div>
                }
			</div>
		</div>
	);
};

export default Address;
