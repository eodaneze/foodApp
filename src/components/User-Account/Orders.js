import React from "react";

const Orders = () => {
	return (
		<div class="table-responsive">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th scope="col">No</th>
						<th scope="col">Product</th>
						<th scope="col">Name</th>
						<th scope="col">Quantity</th>
						<th scope="col">Total</th>
						<th scope="col">Date</th>
						<th scope="col">Status</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Burger</td>
						<td>Kingsley</td>
						<td>2</td>
						<td>$20</td>
						<td>23-1-2024</td>
						<td className="text-center">
							<button className="btn btn-outline-warning">Pending</button>
						</td>
					</tr>
					<tr>
						<th scope="row">1</th>
						<td>Burger</td>
						<td>Kingsley</td>
						<td>2</td>
						<td>$20</td>
						<td>23-1-2024</td>
						<td className="text-center">
							<button className="btn btn-outline-warning">Pending</button>
						</td>
					</tr>
					<tr>
						<th scope="row">1</th>
						<td>Burger</td>
						<td>Kingsley</td>
						<td>2</td>
						<td>$20</td>
						<td>23-1-2024</td>
						<td className="text-center">
							<button className="btn btn-outline-warning">Pending</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Orders;
