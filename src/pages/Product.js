import React from "react";
import {BsCartPlus} from 'react-icons/bs'
import Navbar from "../components/Navbar";
import DynamicHero from "../components/DynamicHero";

const Product = () => {
	return (
		<div>
			<div className="container-xxl position-relative p-0">
				<Navbar />
				<DynamicHero page={"Product"} />
			</div>

			<section>
				<div className="container-lg bg-white p-4 rounded shadow-lg">
					<div className="row">
						<div className="col-md-6 mb-3">
							<img
								className="img-fluid rounded"
								src="https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=600
                                "
								alt="Product"
							/>
						</div>

						<div className="col-md-6">
							<div className="d-flex flex-column h-100">
								<h1 className="mb-3 text-capitalize">Hamburger</h1>
								<span className="mb-3 fw-bold">$100</span>
								<p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dolorum ducimus aliquam sit aspernatur recusandae eum ullam iure quas eos.</p>
								<button className="btn btn-primary mb-3 w-100 mt-auto">
                                    <BsCartPlus size={30}/>
                                    Add to Cart
                                </button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Product;

