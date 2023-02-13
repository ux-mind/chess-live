import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PUBLIC_ROUTES from '../../../../../data/publicRoutes';

const Round = ({ roundNumber }) => {
	const [isOpened, setIsOpened] = useState(false);

	const { event } = useParams();

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
						<Link
							className="round-games__link"
							to={`${PUBLIC_ROUTES.tournaments}/${event}/game1`}
						>
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
