import React, { useState } from "react";

const AccountDetails = () => {
	const [toggle, setToggle] = useState(false);
	const handleToggle = () => {
		setToggle(() => !toggle)
	}
	return (
		<div>
			<h2>Account Details</h2>
			{!toggle && <div>
				<p>
					<b>Firstname:</b> John
				</p>
				<p>
					<b>Laststname:</b> Doe
				</p>
				<p>
					<b>Email:</b> JohnDoe@gmail.com
				</p>
				<p>
					<b>Mobile No:</b> 940-9238-8239-223
				</p>
				<p>
					<b>Address:</b> 23 John Street, Ikwo
				</p>
				<button className="btn btn-primary" onClick={handleToggle}>Edit</button>
			</div>}

			{toggle && (
				<div>
					<form>
						<div class="row mb-3">
							<div class="col">
								<input
									type="text"
									class="form-control"
									placeholder="First name"
								/>
							</div>
							<div class="col">
								<input
									type="text"
									class="form-control"
									placeholder="Last name"
								/>
							</div>
						</div>
						<div class="row mb-3">
							<div class="col">
								<input type="text" class="form-control" placeholder="Mobile" />
							</div>
							<div class="col">
								<input type="text" class="form-control" placeholder="Email" />
							</div>
						</div>
						<div class="row mb-3">
							<div class="col">
								<input type="text" class="form-control" placeholder="Address" />
							</div>
						</div>
						<div class="row mb-3">
							<div class="col">
								<input
									type="password"
									class="form-control"
									placeholder="Change Password"
								/>
							</div>
						</div>
					</form>
					<div className="d-flex gap-3">
						<button className="btn btn-primary ">Update</button>
						<button className="btn btn-primary" onClick={handleToggle}>Cancel</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default AccountDetails;
