import React, { useState, useEffect } from 'react';

const TournamentsContent = ({ tournaments, activeTab, setTabs, tabs }) => {
	const [activeEvent, setActiveEvent] = useState(null);

	const openEvent = (event) => {
		if (!tabs.includes(event)) {
			setTabs((tabs) => [...tabs, event]);
		}
	};

	useEffect(() => {
		for (let type of tournaments) {
			const event = type.events.find((event) => {
				if (event.event === activeTab) {
					return true;
				}

				return false;
			});

			if (event) {
				setActiveEvent(event);

				return;
			}
		}

		setActiveEvent(null);
	}, [activeTab]);

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
													<button className="tournaments-list__btn">
														{event.event}
													</button>
												</li>
										  ))
										: null}
								</ul>
							</div>
						);
				  })
				: null}
			{activeEvent && <div className="tournament-info"></div>}
		</div>
	);
};

export default TournamentsContent;
