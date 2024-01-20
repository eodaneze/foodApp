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

			<main className="container d-flex flex-column align-items-center justify-content-center p-4 gap-4">
				<div className="w-100 max-w-2xl">
					<h1 className="display-4 font-bold text-center text-primary">Contact Us</h1>
					<p className="text-gray-500 dark:text-gray-400 text-center">
						Have any questions or concerns? We'd love to hear from you.
					</p>
					<form>
						<div className="row gx-4">
							<div className="col-md-6 mb-3">
								<label htmlFor="name" className="form-label">
									Name
								</label>
								<input
									type="text"
									className="form-control"
									id="name"
									placeholder="Enter your name"
								/>
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="email" className="form-label">
									Email
								</label>
								<input
									type="email"
									className="form-control"
									id="email"
									placeholder="Enter your email"
								/>
							</div>
						</div>
						<div className="mb-3">
							<label htmlFor="subject" className="form-label">
								Subject
							</label>
							<input
								type="text"
								className="form-control"
								id="subject"
								placeholder="Enter the subject"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="message" className="form-label">
								Message
							</label>
							<textarea
								className="form-control"
								id="message"
								rows="4"
								placeholder="Enter your message"
							></textarea>
						</div>
						<button type="submit" className="btn btn-primary">
							Send message
						</button>
					</form>
				</div>
			</main>
		</div>
	);
};

export default Contact;
