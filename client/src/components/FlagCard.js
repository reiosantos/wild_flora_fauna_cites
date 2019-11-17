import React, {Fragment} from 'react';
import Amazon from '../res/amazon.png';
import Ebay from '../res/ebay.png';

export const FlagCard = ({ flag }) => (
	<Fragment>
		<div className="card shadow-sm">
				<div className="card-body">
					<div className="row">
						<div className="col-3">
							<img className="card-img-overlay side-img" width="280px" height="250px" src={flag.image} alt="Card cap"/>
						</div>
						<div className="col-9">
							<table className="table table-responsive">
								<tbody>
									<tr><td>Name</td><td><strong>{flag.name}</strong></td></tr>
									<tr><td>Source</td><td>
									<img src={flag.source === 'Amazon' ? Amazon: Ebay} width="50px" height="50px" alt='source'/>
									<a href={flag.link} className="link">Link</a>
									</td></tr>
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
