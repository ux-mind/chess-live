import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import tournaments from '../../data/tournaments';
import { Navigation } from 'swiper';

const Tournaments = () => {
	// Tournament link does not refer to other route
	// Open a new tab instead
	// !NEED TO STORE TOURNAMENTS TABS

	const swiperRef = useRef(null);

	const [activeTab, setActiveTab] = useState('tournaments');
	const [tabs, setTabs] = useState([]);

	const [navigationEnabled, setNavigationEnabled] = useState(false);

	const openEvent = (event) => {
		if (!tabs.includes(event)) {
			setTabs((tabs) => [...tabs, event]);
		}
	};

	const closeEvent = (event) => {
		if (tabs.includes(event)) {
			const filteredTabs = tabs.filter((tab) => tab.event !== event.event);

			setTabs(filteredTabs);
		}
	};

	const enableButtons = () => {
		const swiper = swiperRef.current;
		const wrapper = document.querySelector('.tournaments-tabs .swiper-wrapper');

		if (swiper && wrapper) {
			const swiperWidth = swiper.offsetWidth;
			const wrapperWidth = wrapper.offsetWidth;

			if (wrapperWidth > swiperWidth) {
				setNavigationEnabled(true);
			} else {
				setNavigationEnabled(false);
			}
		}
	};

	return (
		<main className="main tournaments">
			<div className="container">
				<div className="tournaments-wrapper">
					<div className="tournaments-tabs">
						<Swiper
							modules={[Navigation]}
							spaceBetween="auto"
							style={{ width: '100%' }}
							grabCursor={true}
							slideToClickedSlide={true}
							onUpdate={() => enableButtons()}
							navigation={{
								prevEl: '.swiper-navigation-prev',
								nextEl: '.swiper-navigation-next'
							}}
							ref={swiperRef}
						>
							<SwiperSlide key={'tournaments'} style={{ width: 'auto' }}>
								<button
									className={`tab tab_tournaments ${
										activeTab === 'tournaments' ? 'tab_active' : ''
									}`}
									onClick={() => setActiveTab('tournaments')}
								>
									Tournaments
								</button>
							</SwiperSlide>
							{tabs
								? tabs.map((tab, idx) => (
										<SwiperSlide key={tab.event} style={{ width: 'auto' }}>
											<button
												className={`tab ${
													activeTab === tab.event ? 'tab_active' : ''
												}`}
												onClick={() => setActiveTab(tab.event)}
											>
												{tab.event}
												<div
													className="close"
													onClick={() => closeEvent(tab)}
												>
													<svg
														width="24"
														height="24"
														viewBox="0 0 24 24"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M5.82397 3.63201L12 9.80801L18.144 3.66401C18.2797 3.51956 18.4432 3.404 18.6246 3.32427C18.8061 3.24454 19.0018 3.20228 19.2 3.20001C19.6243 3.20001 20.0313 3.36858 20.3313 3.66864C20.6314 3.9687 20.8 4.37567 20.8 4.80001C20.8037 4.99618 20.7673 5.19103 20.693 5.37262C20.6187 5.55421 20.5081 5.71871 20.368 5.85601L14.144 12L20.368 18.224C20.6317 18.482 20.7863 18.8314 20.8 19.2C20.8 19.6244 20.6314 20.0313 20.3313 20.3314C20.0313 20.6314 19.6243 20.8 19.2 20.8C18.9961 20.8085 18.7926 20.7744 18.6026 20.7001C18.4125 20.6257 18.24 20.5126 18.096 20.368L12 14.192L5.83997 20.352C5.70478 20.4916 5.54327 20.6031 5.36477 20.68C5.18627 20.7569 4.99431 20.7977 4.79997 20.8C4.37562 20.8 3.96865 20.6314 3.6686 20.3314C3.36854 20.0313 3.19997 19.6244 3.19997 19.2C3.19624 19.0038 3.23263 18.809 3.30692 18.6274C3.38121 18.4458 3.49182 18.2813 3.63197 18.144L9.85597 12L3.63197 5.77601C3.36826 5.51803 3.21363 5.16867 3.19997 4.80001C3.19997 4.37567 3.36854 3.9687 3.6686 3.66864C3.96865 3.36858 4.37562 3.20001 4.79997 3.20001C5.18397 3.20481 5.55197 3.36001 5.82397 3.63201Z"
															fill="white"
														/>
													</svg>
												</div>
											</button>
										</SwiperSlide>
								  ))
								: null}
						</Swiper>
						{navigationEnabled ? (
							<div className="swiper-navigation">
								<div className="swiper-navigation-prev">
									<svg
										width="24"
										height="22"
										viewBox="0 0 24 22"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M11.0747 1L1.07471 11L11.0747 21" stroke="white" />
										<path d="M23.5 10.9263L1 10.9263" stroke="white" />
									</svg>
								</div>
								<div className="swiper-navigation-next">
									<svg
										width="24"
										height="22"
										viewBox="0 0 24 22"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M12.4253 1L22.4253 11L12.4253 21" stroke="white" />
										<path d="M0 10.9263L22.5 10.9263" stroke="white" />
									</svg>
								</div>
							</div>
						) : null}
					</div>
					<div className="tournaments-block">
						{tournaments && activeTab === 'tournaments'
							? tournaments.map(({ status, events }) => {
									return (
										<div className="tournaments-status" key={status}>
											<div className="tournaments-status__title">
												{status}
											</div>
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