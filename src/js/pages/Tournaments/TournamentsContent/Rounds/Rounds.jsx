import React from 'react';
import { Link } from 'react-router-dom';

const rounds = Array(7).fill(null);

const Rounds = () => {
	return (
		<div className="tournament-rounds">
			<div className="tournament-rounds__accordion">
				{rounds.map((round, idx) => {
					return (
						<div className="round" key={idx}>
							<div className="round-btn">
								<span className="round-btn__text">Round {idx + 1}</span>
								<div className="round-btn__games-count">3</div>
							</div>
							<ul className="round-games">
								<li className="round-games__game">
									<Link className="round-games__link" to="/">
										<span>Artemiev, Vladislav</span>
										<div className="round-games__result">1-0</div>
										<span>Grischuk, Alexander</span>
									</Link>
								</li>
								<li className="round-games__game">
									<Link className="round-games__link" to="/">
										<span>Artemiev, Vladislav</span>
										<div className="round-games__result">1-0</div>
										<span>Grischuk, Alexander</span>
									</Link>
								</li>
							</ul>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Rounds;
