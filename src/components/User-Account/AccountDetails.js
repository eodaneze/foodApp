import React, { useState } from "react";

const AccountDetails = () => {
	return (
		<div>
			<h2>Account Details</h2>
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
					</div>
				</div>
		</div>
	);
};

export default AccountDetails;
