import React from 'react';
import Round from './Round/Round';

const rounds = Array(7).fill(null);

const Rounds = () => {
	return (
		<div className="tournament-rounds">
			<div className="tournament-rounds__accordion">
				{rounds.map((round, idx) => {
					return <Round key={idx} roundNumber={idx + 1} />;
				})}
			</div>
		</div>
	);
};

export default Rounds;
