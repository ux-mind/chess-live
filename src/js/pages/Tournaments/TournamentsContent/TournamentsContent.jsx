import React from 'react';
import Standings from './Standings/Standings';
import Rounds from './Rounds/Rounds';
import { Link } from 'react-router-dom';
import PUBLIC_ROUTES from '../../../data/publicRoutes';

const TournamentsContent = ({ tournaments, activeTab, setActiveTab, setTabs, tabs }) => {
	const openEvent = (event) => {
		if (!tabs.includes(event)) {
			setTabs((tabs) => [...tabs, event]);

			setActiveTab(event.event);
		}
	};

	return (
		<div className="tournaments-block">
			{tournaments && activeTab === 'tournaments'
				? tournaments.map(({ status, events }) => {
						return (
							<div className="tournaments-status" key={status}>
								<div className="tournaments-status__title">{status}</div>
								<ul className="tournaments-list">
									{events[0]
										? events.map((event) => (
												<li
													className="tournaments-list__item"
													key={event.event}
													onClick={() => openEvent(event)}
												>
													<Link
														to={`${PUBLIC_ROUTES.tournaments}/${event.path}`}
														className="tournaments-list__btn"
													>
														{event.event}
													</Link>
												</li>
										  ))
										: null}
								</ul>
							</div>
						);
				  })
				: null}
			{activeTab !== 'tournaments' && (
				<div className="tournament-info">
					<div className="tournament-games">
						<div className="tournament-games__content">
							<div className="tabs-wrapper">
								<button className="tab tab_primary tab_active">Games</button>
							</div>
							<div>
								<p>Tata Steel Chess Masters 2023</p>
								<p>2023-01-13 - 2023-01-30</p>
							</div>
						</div>
					</div>
					<Standings />
					<Rounds />
				</div>
			)}
		</div>
	);
};

export default TournamentsContent;
