import React, {Fragment} from 'react';

export const Listing = ({ result }) => (
	<Fragment>
		<div className="card">
			<div className="card-header" id={result.id}>
				<h2 className="mb-0">
					<button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#${result.taxon_id}`} aria-expanded="true" aria-controls="collapseOne" style={{fontSize:"1.5rem"}}>
						{result.scientific_name}
					</button>
				</h2>
			</div>

			<div id={result.taxon_id} className="collapse" aria-labelledby={result.id} data-parent="#accordionExample">
				<div className="card-body">
				<ul className="list-group list-group-flush">
					<div className="detailList">
						<li className="list-group-item font-weight-bold">Kingdom:</li>
						<span>{result.kingdom}</span>
					</div>
					<div className="detailList">
						<li className="list-group-item font-weight-bold">Scientific Name:</li>
						<span>{result.scientific_name}</span>
					</div>
					<div className="detailList">
						<li className="list-group-item font-weight-bold">Appendix:</li>
						<span>{result.appendix}</span>
					</div>
					<div className="detailList">
						<li className="list-group-item font-weight-bold">Author:</li>
						<span>{result.author}</span>
					</div>
					<div className="detailList" style={{alignItems: "baseline"}}>
						<li className="list-group-item font-weight-bold">Country Distribution</li>
						<span>
							<div className="countrydetails">
								{result.country_distribution.map(country => (
									<ul>
										<li>{country}</li>
									</ul>
								))}
							</div>
						</span>
					</div>
				</ul>
				</div>
			</div>
		</div>
	</Fragment>
);
