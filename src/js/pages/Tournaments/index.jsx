import React, { useState } from 'react';
import tournaments from '../../data/tournaments';

const Tournaments = () => {
	// Tournament link does not refer to other route
	// Open a new tab instead
	// !NEED TO STORE TOURNAMENTS TABS

	const [tabs, setTabs] = useState([]);

	return (
		<main className="main tournaments">
			<div className="container">
				<div className="tournaments-wrapper">
					<div className="tournaments-tabs"></div>
					<div className="tournaments-block"></div>
				</div>
			</div>
		</main>
	);
};

{
	/* <ct-pgn-viewer has-url="true">
		https://pgnfiles.fide.com/almaty2022/open/blitz/games.pgn
	</ct-pgn-viewer> */
}

export default Tournaments;
