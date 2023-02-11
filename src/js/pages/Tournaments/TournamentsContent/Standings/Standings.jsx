import React from 'react';

const Standings = () => {
	return (
		<div className="tournament-standings">
			<div className="tournament-standings__content">
				<div className="tabs-wrapper">
					<button className="tab tab_primary">Info</button>
					<button className="tab tab_primary tab_active">Standings</button>
				</div>
				<table className="tournament-standings__table">
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Pts</th>
							<th>SB</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Artemiev, Vladislav</td>
							<td>7.5</td>
							<td>39.5</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Sadhwani, Raunak</td>
							<td>5</td>
							<td>42.1</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Lagno, Kateryna</td>
							<td>6</td>
							<td>33</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Standings;
