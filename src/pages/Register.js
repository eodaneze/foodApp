import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DynamicHero from "../components/DynamicHero";
import { Link } from "react-router-dom";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [gender, setGender] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(
			"Email:",
			email,
			"Password:",
			password,
			"Firstname:",
			firstname,
			"Lastname:",
			lastname,
			"Confirm Password:",
			confirmPassword
		);
	};

	return (
		<div>
			<div className="container-xxl position-relative p-0">
				<Navbar />
				<DynamicHero page="Sign Up" />
			</div>

			<div className="container mt-5">
				<div className="row justify-content-center">
					<div className="col-md-6 col-lg-4">
						<div className="card p-4">
							<h2 className="mb-4 text-center fw-bold text-uppercase">
								Sign Up
							</h2>
							<form onSubmit={handleSubmit}>
								<div className="mb-3">
									<label htmlFor="firstname" className="form-label fw-bold">
										Firstname
									</label>
									<input
										type="text"
										className="form-control"
										id="firstname"
										placeholder="Firstname"
										value={firstname}
										onChange={(e) => setFirstname(e.target.value)}
										required
									/>
								</div>

								<div className="mb-3">
									<label htmlFor="lastname" className="form-label fw-bold">
										Lastname
									</label>
									<input
										type="text"
										className="form-control"
										id="lastname"
										placeholder="Lastname"
										value={lastname}
										onChange={(e) => setLastname(e.target.value)}
										required
									/>
								</div>

								<div className="mb-3">
									<label htmlFor="email" className="form-label fw-bold">
										Email address
									</label>
									<input
										type="email"
										className="form-control"
										id="email"
										placeholder="Enter email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>

								<div className="mb-3">
									<label htmlFor="gender" className="form-label fw-bold">
										Gender
									</label>
									<select
										className="form-select"
										id="gender"
										value={gender}
										onChange={(e) => setGender(e.target.value)}
										required
									>
										<option value="" disabled>
											Select gender
										</option>
										<option value="male">Male</option>
										<option value="female">Female</option>
									</select>
								</div>

								<div className="mb-3">
									<label htmlFor="password" className="form-label fw-bold">
										Password
									</label>
									<input
										type="password"
										className="form-control"
										id="password"
										placeholder="Password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										required
									/>
								</div>

								<div className="mb-3">
									<label
										htmlFor="confirm-password"
										className="form-label fw-bold"
									>
										Confirm Password
									</label>
									<input
										type="password"
										className="form-control"
										id="confirm-password"
										placeholder="Confirm Password"
										value={confirmPassword}
										onChange={(e) => setConfirmPassword(e.target.value)}
										required
									/>
								</div>

								<button
									type="submit"
									className="btn btn-primary mb-3 w-100"
									onClick={handleSubmit}
								>
									Sign Up
								</button>

								<p className="mb-0 text-center">
									Already have an account? <a href="/login">Log In</a>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
