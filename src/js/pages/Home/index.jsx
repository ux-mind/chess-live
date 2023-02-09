import React from 'react';
import HomeBg from './HomeBg/HomeBg';
import Title from '../../components/Title';
import PrimaryBtn from '../../components/PrimaryBtn';
import PUBLIC_ROUTES from '../../data/publicRoutes';

const Home = () => {
	return (
		<main className="main home">
			<HomeBg />
			<div className="container">
				<div className="home-content">
					<div className="home-preview">
						<div className="home-preview__title">
							<Title size="l">CHESS LIVE TV</Title>
						</div>
						<div className="home-preview__subtitle">
							<p>CHESS TOURNAMENTS, GAMES AND NEWS</p>
						</div>
						<div className="home-preview__btn">
							<PrimaryBtn type="link" route={PUBLIC_ROUTES.tournaments}>
								WATCH IT NOW
							</PrimaryBtn>
						</div>
					</div>
				</div>
			</div>
			<div className="home-bottom">
				<div className="home-bottom__block">
					<div className="home-bottom__block_shadow"></div>
					<div className="home-bottom__main">
						<span>made by - Musa BinThaily</span>
					</div>
					<div className="home-bottom__block_shadow"></div>
				</div>
			</div>
		</main>
	);
};

export default Home;
