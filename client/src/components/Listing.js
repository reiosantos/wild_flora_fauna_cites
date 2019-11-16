import React, {Fragment} from 'react';

export const Listing = ({ result }) => (
	<Fragment>
		<div class="card">
			<div class="card-header" id={result.id}>
				<h2 class="mb-0">
					<button class="btn btn-link" type="button" data-toggle="collapse" data-target={`#${result.taxon_id}`} aria-expanded="true" aria-controls="collapseOne" style={{fontSize:"1.5rem"}}>
						{result.scientific_name}
					</button>
				</h2>
			</div>

			<div id={result.taxon_id} class="collapse" aria-labelledby={result.id} data-parent="#accordionExample">
				<div class="card-body">
				<ul class="list-group list-group-flush">
					<div className="detailList">
						<li class="list-group-item font-weight-bold">Kingdom:</li>
						<span>{result.kingdom}</span>
					</div>
					<div className="detailList">
						<li class="list-group-item font-weight-bold">Scientific Name:</li>
						<span>{result.scientific_name}</span>
					</div>
					<div className="detailList">
						<li class="list-group-item font-weight-bold">Appendix:</li>
						<span>{result.appendix}</span>
					</div>
					<div className="detailList">
						<li class="list-group-item font-weight-bold">Author:</li>
						<span>{result.author}</span>
					</div>
					<div className="detailList" style={{alignItems: "baseline"}}>
						<li class="list-group-item font-weight-bold">Country Distribution</li>
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
