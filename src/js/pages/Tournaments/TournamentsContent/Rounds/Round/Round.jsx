import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Round = ({ roundNumber }) => {
	const [isOpened, setIsOpened] = useState(false);

	return (
		<div className="round">
			<div
				className={isOpened ? `round-btn round-btn_opened` : `round-btn`}
				onClick={() => setIsOpened((prev) => !prev)}
			>
				<span className="round-btn__text">Round {roundNumber}</span>
				<div className="round-btn__games-count">3</div>
			</div>
			{isOpened ? (
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
			) : null}
		</div>
	);
};

export default Round;
