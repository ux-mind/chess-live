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
					<div className="tournaments-tabs">
						<button className="tab">Tournaments</button>
						{tabs
							? tabs.map((tab, idx) => (
									<button className="tab" key={idx}>
										{tab.event}
									</button>
							  ))
							: null}
					</div>
					<div className="tournaments-block">
						{tournaments
							? tournaments.map(({ status, events }) => {
									return (
										<div className="tournaments-status" key={status}>
											<div className="tournaments-status__title">
												{status}
											</div>
											<ul className="tournaments-list">
												{events[0]
													? events.map(({ event }) => (
															<li
																className="tournaments-list__item"
																key={event}
															>
																<button className="tournaments-list__btn">
																	{event}
																</button>
															</li>
													  ))
													: null}
											</ul>
										</div>
									);
							  })
							: null}
					</div>
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
