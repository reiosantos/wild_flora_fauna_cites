import React, {Fragment} from 'react';

export const FlagCard = ({ flag }) => (
	<Fragment>
		<div className="card shadow-sm">
				<div className="card-body">
					<div className="row">
						<div className="col-3">
							<img className="card-img-overlay side-img" width="200px" height="250px" src={flag.image} alt="Card image cap"/>
						</div>
						<div className="col-9">
							<table className="table table-responsive">
								<tbody>
									<tr><td>Name</td><td>{flag.name}</td></tr>
									<tr><td>Source</td><td>{flag.source}</td></tr>
									<tr><td>Description</td><td>{flag.description}</td></tr>
									<tr><td>Appendix</td><td>{flag.appendix}</td></tr>
									<tr><td>Status</td><td>{flag.status}</td></tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
		</div>
	</Fragment>
);
